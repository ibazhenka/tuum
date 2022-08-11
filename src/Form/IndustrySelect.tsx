import React from 'react';
import { MenuItem,
} from '@mui/material';
import { CSelect } from '../elements/select';

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

interface IndustrySelectProps {
  value: string
  isValid: boolean
  visibleError: boolean
  onChange: (data: { value: string, isValid: boolean, visibleError: boolean }) => void
  validation: (value: string) => string
}
export function IndustrySelect({
 visibleError,
 isValid,
 validation,
 onChange,
 value,
  ...props
}: IndustrySelectProps) {
  return (
    <CSelect
      {...props}
      value={value}
      error={!isValid && visibleError}
      helperText={visibleError && !isValid ? validation(value) : ' '}
      label="Industry"
      onChange={(newValue) => onChange({
        value: newValue,
        isValid: !validation(newValue),
        visibleError: true,
      })}
    >
      {industryList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
    </CSelect>
  );
}
