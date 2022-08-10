import React from 'react';
import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import { theme } from '../theme';

export function CTextField({ ...props }: TextFieldProps) {
  return (
    <TextField
      variant="standard"
      helperText={' '}
      sx={{
        width: 'calc(50% - 12px )',
        [theme.breakpoints.down(600)]: {
          width: '100%'
        },
        ...props.sx
      }}
      {...props}
    />
  );
}
