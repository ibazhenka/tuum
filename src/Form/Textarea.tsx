import React from 'react';
import {
  InputLabel,
  TextField,
} from '@mui/material';
import { theme } from '../theme';

export function CTextarea({ value, onChange }: {
  value: string,
  onChange: (el: string)=>void
}) {
  return (
    <>
      <InputLabel sx={{ color: theme.palette.text.primary }}>What would you like to talk about?</InputLabel>
      <TextField value={value} onChange={(e) => onChange(e.target.value)} fullWidth multiline rows={3} sx={{ marginTop: 0.5 }} />
    </>
  );
}
