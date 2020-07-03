import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core';

export const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Implementations
        </Typography>
    </Toolbar>
  </AppBar>
)

