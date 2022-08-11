import React, { ReactNode } from 'react';
import {
  FormControl, FormHelperText,
  InputLabel,
  Select,
} from '@mui/material';
import { theme } from '../theme';

export interface CSelectProps {
  value: string,
  onChange: (newValue: string) => void,
  error?: boolean,
  helperText?: string
  required?: boolean,
  label: string,
  children: ReactNode
}

export function CSelect({ value, onChange, error, helperText, required, label, children }: CSelectProps) {
  return (
    <FormControl
      required={required}
      variant="standard"
      sx={{
        width: 'calc(50% - 12px )',
        [theme.breakpoints.down(600)]: {
          width: '100%'
        },
      }}
    >
      <InputLabel error={error}>{label}</InputLabel>
      <Select
        value={value}
        defaultValue=""
        error={error}
        onBlur={(e) => onChange(String(e.target.value))}
        onChange={(e) => onChange(String(e.target.value))}
      >
        {children}
      </Select>
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  );
}
