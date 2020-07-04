import React from 'react'
import { Grid } from '@material-ui/core'
import { TextEdit } from '../TextEdit'

export const KrivineMachine: React.FC = () => (
  <Grid container spacing={1}>
    <Grid item xs={6}><TextEdit /></Grid>
    <Grid item xs={6}>Result</Grid>
  </Grid>
)