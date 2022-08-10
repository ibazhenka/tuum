import React from 'react';
import {
  InputLabel,
  TextField,
} from '@mui/material';
import { theme } from '../theme';

export function CTextarea({ onChange }: {onChange: (el: string)=>void
}) {
  return (
    <>
      <InputLabel sx={{ color: theme.palette.text.primary }}>What would you like to talk about?</InputLabel>
      <TextField onChange={(e) => onChange(e.target.value)} fullWidth multiline rows={3} sx={{ marginTop: 0.5 }} />
    </>
  );
}
