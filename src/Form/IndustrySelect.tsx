import React, { useState } from 'react';
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
  onChange: (data: { value: string, isValid: boolean }) => void
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
  const [finishEditing, setFinishEditing] = useState(false);
  return (
    <CSelect
      {...props}
      value={value}
      error={!isValid && (visibleError || finishEditing)}
      helperText={visibleError && !isValid ? validation(value) : ' '}
      label="Industry*"
      onChange={(newValue) => {
        onChange({
          value: newValue,
          isValid: !validation(newValue),
        });
        setFinishEditing(true);
      }}
    >
      {industryList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
    </CSelect>
  );
}
