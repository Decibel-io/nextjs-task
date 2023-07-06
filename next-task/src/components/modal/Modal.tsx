import React from 'react';
import { Modal as MuiModal, Box, ModalProps } from '@mui/material';

interface IModal extends ModalProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

function Modal({ children, header, footer, ...rest }: IModal) {
  return (
    <Box>
      <MuiModal {...rest} sx={{}}>
        <Box>
          <Box>{header}</Box>
          <Box>{children}</Box>
          <Box>{footer}</Box>
        </Box>
      </MuiModal>
    </Box>
  );
}

export default Modal;
