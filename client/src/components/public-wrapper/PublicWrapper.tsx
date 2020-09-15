import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Toolbar from '../toolbar';

const PublicWrapper: React.FC = ({ children }) => {
  return (
    <>
      <Toolbar />
      <Box display='flex' height='100%'>
        <Grid container direction='row' justify='center' alignItems='center'>
          {children}
        </Grid>
      </Box>
    </>
  );
};

export default PublicWrapper;
