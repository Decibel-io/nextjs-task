import React, { PropsWithChildren } from 'react';
import { Modal as MuiModal, Box, ModalProps } from '@mui/material';

interface IModal extends ModalProps {}

function Modal({ children, ...rest }: IModal) {
  return (
    <Box>
      <MuiModal {...rest} sx={{}}>
        <Box>{children}</Box>
      </MuiModal>
    </Box>
  );
}

export default Modal;
