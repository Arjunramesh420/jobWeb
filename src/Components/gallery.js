import React from 'react';
import { Box, Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';

const UnderDevelopment = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <BuildIcon fontSize="large" color="primary" />
      <Typography variant="h4" component="h1" gutterBottom>
        Page Under Development
      </Typography>
      <Typography variant="body1">
        We are working hard to bring you this page. Stay tuned!
      </Typography>
    </Box>
  );
};

export default UnderDevelopment;
