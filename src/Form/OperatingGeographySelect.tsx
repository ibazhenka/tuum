import React from 'react';
import { MenuItem,
} from '@mui/material';
import { CSelect, CSelectProps } from '../elements/select';

const operatingGeographyList = [
  'National',
  'Regional',
  'Global',
];

export function OperatingGeographySelect(props: Omit<CSelectProps, 'children'|'label'>) {
  return (
    <CSelect {...props} label="Operating geography">
      {operatingGeographyList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
    </CSelect>
  );
}
