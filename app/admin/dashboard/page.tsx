"use client";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Pagination,
  CircularProgress,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useEffect, useState } from "react";
import { getNodes, archiveNode, newNote } from "@/service";

import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AddNewNoteModal from "@/components/AddNewNoteModal";
import ViewDetailsModal from "@/components/ViewDetailsModal";
import { convertSecondsToMinutesAndSeconds, getDateFormat } from "@/helpers";

interface Call {
  id: number;
  call_type: string;
  created_at: Date;
  direction: string;
  duration: number;
  from: string;
  is_archived: boolean;
  notes: [];
  to: string;
  via: string;
}

const colors: { [key: string]: string } = {
  answered: "info.main",
  missed: "error.main",
  voicemail: "text.primary",
};

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openCreateNoteModal, setOpenCreateNoteModal] = useState(false);
  const [nodes, setNodes] = useState<Call[]>([]);
  const [activeNode, setActiveNode] = useState<Call>({} as Call);
  const [totalCount, setTotalCount] = useState(0);
  const [offset, setOffset] = useState<number>(0);
  const countPages = Math.floor(totalCount / 10);

  useEffect(() => {
    setLoader(true);
    getNodes(offset)
      .then((res) => {
        setNodes(res.data.nodes);
        setTotalCount(res.data.totalCount);
        setLoader(false);
      })
      .catch((_) => {
        setLoader(false);
      });
  }, [offset]);

  const handlePageChange = (event: any, page: number) => {
    setActivePage(page);
    setOffset(page * 10);
  };

  const clickEyeIcon = (node: Call) => {
    setActiveNode(node);
    setOpen(true);
  };

  const archiveSelectedNode = (index: number) => {
    archiveNode(String(nodes[index].id)).then((res) => {
      const nod = [...nodes];
      nod[index].is_archived = !nod[index].is_archived;
      setNodes(nod);
    });
  };

  const clickNewNoteIcon = (node: Call) => {
    setOpenCreateNoteModal(true);
    setActiveNode(node);
  };

  const createNewNote = (content: string) => {
    newNote(String(activeNode.id), content).then((res) => {
      const index = nodes.findIndex((item) => item.id === activeNode.id);
      const modifiedNodes = [...nodes]
      modifiedNodes[index] = res.data
      setNodes(modifiedNodes)
      setOpenCreateNoteModal(false)
    });
  };

  return (
    <Box p={3} >
      <Typography component="h1" variant="h5">
        Turing Technologies Frontend Test
      </Typography>

      <Typography mb={1} mt={2} component="h4" variant="h6">
        Total count: {totalCount}
      </Typography>

      {loader ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <CircularProgress size={80} />
        </Box>
      ) : (
        <>
          <Box sx={{ overflowX: "auto" }}>
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>CALL TYPE</TableCell>
                  <TableCell>DIRECTION</TableCell>
                  <TableCell>DURATION</TableCell>
                  <TableCell>FROM</TableCell>
                  <TableCell>TO</TableCell>
                  <TableCell>VIA</TableCell>
                  <TableCell>CREATED AT</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell align="center">ACTIONS</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {nodes.map((row: Call, index: number) => {
                  return (
                    <TableRow hover key={row.id}>
                      <TableCell sx={{ color: colors[row.call_type] }}>
                        {row.call_type}
                      </TableCell>
                      <TableCell color="primary">{row.direction}</TableCell>
                      <TableCell>
                        {convertSecondsToMinutesAndSeconds(row.duration)}
                      </TableCell>
                      <TableCell>{row.from}</TableCell>
                      <TableCell>{row.to}</TableCell>
                      <TableCell>{row.via}</TableCell>
                      <TableCell>{getDateFormat(row.created_at)}</TableCell>
                      <TableCell
                        sx={{
                          color: row.is_archived ? "info.main" : "text.primary",
                        }}
                      >
                        {row.is_archived ? "Archived" : "Unarchive"}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        {row.is_archived ? (
                          <UnarchiveIcon
                            sx={{ cursor: "pointer" }}
                            onClick={() => archiveSelectedNode(index)}
                          />
                        ) : (
                          <ArchiveIcon
                            sx={{ cursor: "pointer" }}
                            onClick={() => archiveSelectedNode(index)}
                          />
                        )}
                        <RemoveRedEyeIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => clickEyeIcon(row)}
                        />
                        <NoteAddIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => clickNewNoteIcon(row)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <Box mt={4} sx={{ display: "flex", justifyContent: "center" }}>
              <Stack spacing={2}>
                <Pagination
                  onChange={handlePageChange}
                  page={activePage}
                  count={countPages}
                  color="primary"
                  shape="rounded"
                />
              </Stack>
            </Box>
          </Box>
        </>
      )}

      <ViewDetailsModal node={activeNode} open={open} setOpen={setOpen} />
      <AddNewNoteModal
        createNewNote={createNewNote}
        open={openCreateNoteModal}
        setOpen={setOpenCreateNoteModal}
      />
    </Box>
  );
}