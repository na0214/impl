import React from 'react'
import { Typography, Paper } from '@material-ui/core'

const paperStyle = { height: "10%", textAlign: "center" }

export const StateBar: React.FC = () => (
  <>
    <Paper style={paperStyle}>
      <Typography variant="h5">λx.x</Typography>
    </Paper>
    <Paper style={paperStyle}>
      <Typography variant="h5">最近の更新</Typography>
    </Paper>
    <Paper style={paperStyle}>
      <Typography variant="h5">最近の更新</Typography>
    </Paper>
    <Paper style={paperStyle}>
      <Typography variant="h5">最近の更新</Typography>
    </Paper>
  </>
)