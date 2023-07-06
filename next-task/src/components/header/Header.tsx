import { Box, Divider, Typography as Text } from '@mui/material';

import React from 'react';
import Button from '../button/Button';
import { styles } from './styles';

const { headerContainer, heading } = styles;

function Header() {
  return (
    <Box>
      <Box sx={headerContainer}>
        <Box>
          <Text sx={heading} variant='h3'>
            Calls Inc
          </Text>
        </Box>
        <Box>
          <Button>Logout</Button>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}

export default Header;
