import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@mui/material';
import { styles } from './styles';

const { buttonStyles } = styles;

interface IButton extends ButtonProps {}

function Button({ children, sx, ...rest }: IButton) {
  return (
    <MuiButton sx={{ ...buttonStyles, ...sx }} {...rest}>
      {children}
    </MuiButton>
  );
}

export default Button;
