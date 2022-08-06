import React from 'react';
import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';

export function CTextField({ ...props }: TextFieldProps) {
  return (
    <TextField variant="standard" sx={{ width: 'calc(50% - 12px )', ...props.sx }} {...props} />
  );
}
