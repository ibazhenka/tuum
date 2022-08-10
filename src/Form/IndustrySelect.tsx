import React from 'react';
import { MenuItem,
} from '@mui/material';
import { CSelect, CSelectProps } from '../elements/select';

const industryList = [
  'Automotive',
  'Banking',
  'Consulting',
  'Finance',
  'Healthcare',
  'Media/PR',
  'Retail',
  'Technology',
  'Telecommunication',
  'Other'
];

export function IndustrySelect(props: Omit<CSelectProps, 'children'|'label'>) {
  return (
    <CSelect {...props} label="Industry">
      {industryList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
    </CSelect>
  );
}
