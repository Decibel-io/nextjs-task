import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 4 }}>
        <Typography variant="h5" fontWeight={"900"} component="h1">
          Calls Inc
        </Typography>
        <Button variant="contained" size="large">
          Log out
        </Button>
      </Box>
    </>
  );
};

export default Header;
