import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Call } from "../interfaces/call";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  onClose,
  row,
  token,
}: {
  open: boolean;
  onClose: any;
  row: Call | null;
  token: string;
}) {
  const [archive, setArchive] = useState<boolean>(row?.is_archived as boolean);
  const handleArchive = async () => {
    const res = await fetch(
      `https://frontend-test-api.aircall.io/calls/${row?.id}/archive`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the bearer token in the header
        },
      }
    );
    if (res.ok) {
      setArchive(!archive);
    }
  };

  return (
    <div>
      {/*  */}
      <Modal
        open={open}
        // onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h5" component="h1">
              Call Details
            </Typography>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />
          </Box>
          <hr />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Box sx={{ display: "flex", gap: 9 }}>
              <Box> Call ID:</Box> {row?.id}
            </Box>
            <Box sx={{ display: "flex", gap: 6 }}>
              <Box> Call Type:</Box> {row?.call_type}
            </Box>
            <Box sx={{ display: "flex", gap: 4 }}>
              <Box> Created At:</Box> {row?.created_at}
            </Box>
            <Box sx={{ display: "flex", gap: 6 }}>
              <Box> Duration :</Box> {row?.duration}
            </Box>
            <Box sx={{ display: "flex", gap: 6 }}>
              <Box> Direction: </Box> {row?.direction}
            </Box>
            <Box sx={{ display: "flex", gap: 10 }}>
              <Box> From: </Box> {row?.from}
            </Box>
            <Box sx={{ display: "flex", gap: 13 }}>
              <Box> To:</Box> {row?.to}
            </Box>
            <Box sx={{ display: "flex", gap: 12 }}>
              <Box> Via: </Box>
              {row?.via}
            </Box>
            <Box sx={{ display: "flex", gap: 9 }}>
              <Box> Status: </Box>
              {/* {row?.is_archived as string} */}
              {archive ? "Archived" : "Unarchived"}
            </Box>
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" size="large" onClick={handleArchive}>
              {archive ? "Unarchive" : "Archive"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
