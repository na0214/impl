import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'

type HeaderProps = {
  mode: string
}

export const Header: React.FC<HeaderProps> = (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5">
        Implementations
      </Typography>
      <div style={{ marginLeft: "auto" }}>
        <Typography variant="h6">
          {props.mode}
        </Typography>
      </div>
    </Toolbar>
  </AppBar>
)

