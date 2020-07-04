import React from 'react'
import { Grid } from '@material-ui/core'
import { StateBar } from './StateBar'

const machineStateStyle = (
  {
    height: "100%",
    width: "100%",
    overflow: "auto",
  }
)

export const MachineState: React.FC = () => (
  <div style={machineStateStyle}>
    <Grid container>
      <Grid item xs={6}><StateBar /></Grid>
      <Grid item xs={6}><StateBar /></Grid>
    </Grid>
  </div>
)