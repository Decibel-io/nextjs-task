import { useState } from "react";
import Button from "@mui/material/Button";
import { Modal, Box, Typography, TextField } from "@mui/material";

const modalContainerStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  minWidth: "400px",
  p: 4,
  borderRadius: 3,
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
};

const AddNewNoteModal = ({ open, setOpen, createNewNote }: any) => {
  const [content, setContent] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const onCreateNewNote = () => {
    if (content) {
      createNewNote(content);
      setContent("")
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalContainerStyle}>
          <Typography variant="h5" component="h2">
            Create New Note
          </Typography>

          <TextField
            multiline
            rows={3}
            placeholder="New note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <Box sx={{ display: "flex", justifyContent: "right", columnGap: 1 }}>
            <Button color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="primary" onClick={onCreateNewNote}>
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddNewNoteModal;