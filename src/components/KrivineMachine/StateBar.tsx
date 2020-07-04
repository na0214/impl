import React from 'react'
import { Typography, Paper } from '@material-ui/core'

type StateBarProps = {
  title: string;
}

const paperStyle = { height: "10%", margin: "5px", padding: "5px" }

const titleStyle = { height: "10%", margin: "5px", color: "#fff", backgroundColor: "#1976d2", padding: "5px" }

export const StateBar: React.FC<StateBarProps> = (props) => (
  <>
    <Paper style={titleStyle}>
      <Typography variant="h5" align="center">{props.title}</Typography>
    </Paper>
    <Paper style={paperStyle}>
      <Typography variant="h5" align="center">
        <div className="box-read">
          λx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.xλx.x</div></Typography>
    </Paper>
    <Paper style={paperStyle}>
      <Typography variant="h5" align="center">λx.x</Typography>
    </Paper>
    <Paper style={paperStyle}>
      <Typography variant="h5" align="center">λx.x</Typography>
    </Paper>
  </>
)