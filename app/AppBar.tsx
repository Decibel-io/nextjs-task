"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession()
  const handlelogOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calls Inc
          </Typography>
          {
            !session?.user ?
              <Button onClick={() => signIn()} color="inherit">Log In</Button>
              :
              <Button onClick={handlelogOut} color="inherit">Log Out</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}