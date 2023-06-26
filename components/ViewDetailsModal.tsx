import * as React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { getDateFormat, convertSecondsToMinutesAndSeconds } from "../helpers";
import { styled } from "@mui/system";

interface note {
  id: string;
  content: string;
}

const modalContainerStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
};

const InfoKey = styled("span")({
  fontWeight: "700",
});

const ViewDetailsModal = ({ node, open, setOpen }: any) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalContainerStyle}>
          <Typography variant="h5" component="h2">
            Call details
          </Typography>

          <Box sx={{ display: "flex", columnGap: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 0.5 }}>
              <Typography>
                <InfoKey>Status: </InfoKey>
                {node.is_archived ? "Archived" : "Unarchive"}
              </Typography>
              <Typography>
                <InfoKey>From: </InfoKey>
                {node.from}
              </Typography>
              <Typography>
                <InfoKey>To: </InfoKey>
                {node.to}
              </Typography>
              <Typography>
                <InfoKey>Via: </InfoKey>
                {node.via}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 0.5 }}>
              <Typography>
                <InfoKey>Call Type: </InfoKey>
                {node.call_type}
              </Typography>
              <Typography sx={{ whiteSpace: "pre" }}>
                <InfoKey>Duration: </InfoKey>
                {convertSecondsToMinutesAndSeconds(node.duration)}
              </Typography>
              <Typography sx={{ whiteSpace: "pre" }}>
                <InfoKey>Direction: </InfoKey>
                {node.direction}
              </Typography>
              <Typography sx={{ whiteSpace: "pre" }}>
                <InfoKey>Created At: </InfoKey>
                {getDateFormat(node.created_at)}
              </Typography>
            </Box>
          </Box>

          {node.notes?.[0] && (
            <Box>
              <Typography>
                <InfoKey>Notes: </InfoKey>
              </Typography>
              <Box>
                {node.notes?.map((note: note, index: string) => (
                  <Typography key={index}>
                    {index + 1}. {note.content}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ViewDetailsModal;