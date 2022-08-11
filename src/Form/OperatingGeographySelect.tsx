import React from 'react';
import { MenuItem,
} from '@mui/material';
import { CSelect } from '../elements/select';

const operatingGeographyList = [
  'National',
  'Regional',
  'Global',
];

export function OperatingGeographySelect({ value, onChange }: {
  value: string,
  onChange: (newValue: string)=>void}) {
  return (
    <CSelect
      value={value}
      onChange={onChange}
      label="Operating geography"
    >
      {operatingGeographyList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
    </CSelect>
  );
}
