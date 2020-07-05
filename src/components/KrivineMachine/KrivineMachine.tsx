import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import { TextEdit } from '../TextEdit'
import { MachineState } from './MachineState'
import { EvaluationHighlight } from './EvaluationHighlight'

const buttonStyle = {
  height: "100%",
  fontSize: "30px",
}

export const KrivineMachine: React.FC = () => {
  const [textValue, setTextValue] = useState("")

  return (
    <Grid container>
      <Grid item xs={6}>
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridTemplateColumns: "1fr" }}>
          <TextEdit textValue={textValue} setTextValue={setTextValue} />
          <EvaluationHighlight tokenList={["(", "λ", "x", ".", "x", ")", "(", "λ", "x", ".", "x", ")"]} highlightStart={6} highlightEnd={12} />
        </div>
      </Grid >
      <Grid item xs={6}>
        <div style={{ display: "grid", gridTemplateRows: "9fr 1fr", gridTemplateColumns: "1fr", backgroundColor: "#212121" }}>
          <MachineState />
          <Grid container>
            <Grid item xs={3}><Button style={buttonStyle} color="secondary" fullWidth variant="contained"> {"<<"} </Button></Grid>
            <Grid item xs={3}><Button style={buttonStyle} color="secondary" fullWidth variant="contained"> {"<"} </Button></Grid>
            <Grid item xs={3}><Button style={buttonStyle} color="primary" fullWidth variant="contained"> {">"} </Button></Grid>
            <Grid item xs={3}><Button style={buttonStyle} color="primary" fullWidth variant="contained"> {">>"} </Button></Grid>
          </Grid>
        </div>
      </Grid>
    </Grid >)
}