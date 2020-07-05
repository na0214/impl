import React, { Dispatch, SetStateAction } from 'react'
import { TextField } from '@material-ui/core'

type TextEditProps = {
  textValue: string,
  setTextValue: Dispatch<SetStateAction<string>>
}

export const TextEdit: React.FC<TextEditProps> = (props) => {

  return (
    <TextField
      id="outlined-multiline-static"
      label="Please input code here."
      multiline
      fullWidth
      value={props.textValue}
      onChange={(e) => props.setTextValue(e.target.value)}
      variant="filled"
    />
  )
}