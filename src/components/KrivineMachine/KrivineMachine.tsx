import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { TextEdit } from '../TextEdit'
import { MachineState } from './MachineState'

const buttonStyle = {
  height: "100%",
  fontSize: "30px"
}

export const KrivineMachine: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={6}><TextEdit /></Grid>
      <Grid item xs={6}>
        <div style={{ display: "grid", gridTemplateRows: "9fr 1fr", gridTemplateColumns: "1fr" }}>
          <MachineState />
          <Grid container>
            <Grid item xs={3}><Button style={buttonStyle} color="secondary" fullWidth variant="contained"> {"<<"} </Button></Grid>
            <Grid item xs={3}><Button style={buttonStyle} color="secondary" fullWidth variant="contained"> {"<"} </Button></Grid>
            <Grid item xs={3}><Button style={buttonStyle} color="primary" fullWidth variant="contained"> {">"} </Button></Grid>
            <Grid item xs={3}><Button style={buttonStyle} color="primary" fullWidth variant="contained"> {">>"} </Button></Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>)
}