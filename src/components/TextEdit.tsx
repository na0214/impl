import React from 'react'
import { TextField, Typography, Paper, Grid } from '@material-ui/core'

export const TextEdit: React.FC = () => (
  <TextField
    id="outlined-multiline-static"
    label="Please input code here."
    multiline
    fullWidth
    variant="filled"
  />
)