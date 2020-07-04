import React from 'react'
import { Typography, Paper } from '@material-ui/core'

const paperStyle = { height: "10%", margin: "5px" }

export const StateBar: React.FC = () => (
  <>
    <Paper style={paperStyle}>
      <Typography variant="h5" align="center">λx.x</Typography>
    </Paper>
    <Paper style={paperStyle}>
      <Typography variant="h5" align="center">λx.x</Typography>
    </Paper>
    <Paper style={paperStyle}>
      <Typography variant="h5" align="center">λx.x</Typography>
    </Paper>
    <Paper style={paperStyle}>
      <Typography variant="h5" align="center">λx.x</Typography>
    </Paper>
  </>
)