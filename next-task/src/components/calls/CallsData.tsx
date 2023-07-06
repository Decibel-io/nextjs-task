import { useAddNote } from '@/api/useAddPost';
import { useArchiveCall } from '@/api/useArchiveCall';
import { useCalls } from '@/api/useCalls';
import { CALLS_COLUMNS, CALLS_FILTERS } from '@/constants';
import { ICall } from '@/types/api';
import {
  alertAnError,
  formatDate,
  getFilteredCalls,
  secondsToMinutes,
} from '@/utils';
import {
  Box,
  CircularProgress,
  Divider,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import Modal from '../modal/Modal';
import MyTable from '../table/Table';
import { getArchiveStyles, getCallTypeStyles, styles } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import Select from '../select/Select';
import { ICallFilter } from '@/types/global';
import Button from '../button/Button';

const Text = Typography;
const { modalBody, button, headerContainer, rowContainer } = styles;

function CallsData() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const { data } = useCalls(currentPage, pageSize);

  const [selectedCall, setSelectedCall] = useState<ICall | undefined>(
    undefined
  );
  const [archiveId, setArchiveId] = useState<undefined | string>(undefined);
  const { mutate: archiveCall } = useArchiveCall();
  const [filter, setFilter] = useState<ICallFilter>('All');

  const onArchiveClickHandler = (callId: string) => {
    setArchiveId(callId);
    archiveCall(callId, {
      onSuccess: () => {
        setArchiveId(undefined);
      },
      onError: (err) => alertAnError(err),
    });
  };

  const transFormedData = getFilteredCalls(data, filter)?.map((node) => {
    const isCurrentArchive = archiveId === node.id;

    return {
      callType: (
        <Text sx={getCallTypeStyles(node.callType)}>{node.callType}</Text>
      ),
      direction: <Text>{node.direction}</Text>,
      duration: (
        <Box>
          <Text>{secondsToMinutes(node.duration)}</Text>
          <Text>({node.duration} seconds)</Text>
        </Box>
      ),
      from: <Text>{node.from}</Text>,
      to: <Text>{node.to}</Text>,
      via: <Text>{node.via}</Text>,
      createdAt: <Text>{formatDate(node.createdAt)}</Text>,
      status: (
        <Button
          onClick={() => onArchiveClickHandler(node.id)}
          sx={getArchiveStyles(node.isArchived)}
        >
          &nbsp; {node.isArchived ? 'Archived' : 'UnArchive'} &nbsp;
          {isCurrentArchive && <CircularProgress color={'inherit'} size={15} />}
        </Button>
      ),
      actions: (
        <Button onClick={() => setSelectedCall(node)} sx={button}>
          Add Note
        </Button>
      ),
    };
  });

  const renderModal = useCallback(
    () =>
      !!selectedCall && (
        <Modal open={!!selectedCall} onClose={() => setSelectedCall(undefined)}>
          <CallModalBody {...selectedCall} />
        </Modal>
      ),
    [selectedCall]
  );

  return (
    <Box sx={{ px: 10 }}>
      {renderModal()}
      <Box>
        <Text sx={{ marginTop: 3 }} variant='h4'>
          Page Title
        </Text>
        <Select
          label='Filter by:'
          defaultValue={'All'}
          options={CALLS_FILTERS}
          onSelectOption={(option) => setFilter(option as ICallFilter)}
        />
      </Box>
      <MyTable
        headings={CALLS_COLUMNS}
        data={transFormedData}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalCount={data?.totalCount}
        pageSize={pageSize}
        onRowsPerPageChange={setPageSize}
      />
    </Box>
  );
}

export default CallsData;

const CallModalBody = ({ id, ...callData }: ICall) => {
  const { mutate: addNote, isLoading } = useAddNote();
  const [note, setNote] = useState(
    callData.notes.reduce((acc, item) => (acc += item.content), '')
  );

  const onSave = () => {
    addNote({ id, content: note }, { onError: (err) => alertAnError(err) });
  };

  return (
    <Box sx={modalBody}>
      <Box sx={headerContainer}>
        <Text variant='h6'>Add Note</Text>
        <Box>
          <CloseIcon />
        </Box>
      </Box>
      <Divider />
      <Box>
        <Box sx={rowContainer}>
          <Box sx={{ minWidth: '20%' }}>
            <Text variant='h6'>Call Type</Text>
          </Box>
          <Box>
            <Text>{callData.callType}</Text>
          </Box>
        </Box>
        <Box sx={rowContainer}>
          <Box sx={{ minWidth: '20%' }}>
            <Text variant='h6'>Duration</Text>
          </Box>
          <Box>
            <Text>{secondsToMinutes(callData.duration)}</Text>
          </Box>
        </Box>
        <Box sx={rowContainer}>
          <Box sx={{ minWidth: '20%' }}>
            <Text variant='h6'>From</Text>
          </Box>
          <Box>
            <Text>{callData.from}</Text>
          </Box>
        </Box>
        <Box sx={rowContainer}>
          <Box sx={{ minWidth: '20%' }}>
            <Text variant='h6'>To</Text>
          </Box>
          <Box>
            <Text>{callData.to}</Text>
          </Box>
        </Box>
        <Box sx={rowContainer}>
          <Box sx={{ minWidth: '20%' }}>
            <Text variant='h6'>Via</Text>
          </Box>
          <Box>
            <Text>{callData.via}</Text>
          </Box>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Box>
          <Text>Notes</Text>
        </Box>

        <TextareaAutosize
          style={{
            width: '100%',
            height: '100px',
            resize: 'none',
            border: '1px solid  gray',
          }}
          maxRows={9}
          defaultValue={note || ''}
          onChange={(e) => setNote(e.target.value)}
        />
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Button onClick={onSave} sx={{ width: '100%' }}>
          Save Notes &nbsp;
          {isLoading && <CircularProgress size={15} color={'inherit'} />}
        </Button>
      </Box>
    </Box>
  );
};
