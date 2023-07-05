import { useAddPost } from '@/api/useAddPost';
import { useArchiveCall } from '@/api/useArchiveCall';
import { useCalls } from '@/api/useCalls';
import { CALLS_COLUMNS } from '@/constants';
import { ICall } from '@/types/api';
import { formatDate, secondsToMinutes } from '@/utils';
import {
  Box,
  Button,
  CircularProgress,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import Modal from '../modal/Modal';
import MyTable from '../table/Table';
import { getArchiveStyles, styles } from './styles';

const Text = Typography;
const { modalBody, button } = styles;

function CallsData() {
  const [currentPage, setCurrentPage] = useState(0);
  const { data } = useCalls(currentPage);
  const [selectedCall, setSelectedCall] = useState<ICall | undefined>(
    undefined
  );
  const [archiveId, setArchiveId] = useState<undefined | string>(undefined);
  const { mutate: archiveCall } = useArchiveCall();

  const onArchiveClickHandler = (callId: string) => {
    setArchiveId(callId);
    archiveCall(callId, {
      onSuccess: () => {
        setArchiveId(undefined);
      },
    });
  };

  const transFormedData = data?.nodes.map((node) => {
    const isCurrentArchive = archiveId === node.id;

    return {
      callType: <Text>{node.callType}</Text>,
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
    <Box>
      {renderModal()}
      <MyTable
        headings={CALLS_COLUMNS}
        data={transFormedData}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalCount={data?.totalCount}
      />
    </Box>
  );
}

export default CallsData;

const CallModalBody = ({ id, ...callData }: ICall) => {
  const { mutate: addPost } = useAddPost();
  const [note, setNote] = useState(
    callData.notes.reduce((acc, item) => (acc += item.content), '')
  );

  const onSave = () => {
    addPost({ id, content: note });
  };

  return (
    <Box sx={modalBody}>
      <Box>
        <Typography>Add Note</Typography>
        {JSON.stringify(callData)}
        <TextareaAutosize
          defaultValue={note || ''}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button onClick={onSave}>Save Notes</Button>
      </Box>
    </Box>
  );
};
