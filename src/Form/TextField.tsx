import React, { useState } from 'react';
import { CTextField } from '../elements/text-field';

interface RequiredTextFieldProps {
  label: string
  value: string
  isValid: boolean
  visibleError: boolean
  onChange: (data: { value: string, isValid: boolean }) => void
  validation: (value: string) => string
}
export function RequiredTextField({
   label,
   value,
   isValid,
   onChange,
   validation,
   visibleError,
  }: RequiredTextFieldProps) {
    const [finishEditing, setFinishEditing] = useState(false);
    const errVisible = visibleError || finishEditing;
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange({
      value: e.target.value,
      isValid: !validation(e.target.value),
    });
    return (
      <CTextField
        label={label}
        placeholder={label}
        value={value}
        onChange={changeHandler}
        onBlur={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          changeHandler(e);
          setFinishEditing(true);
        }}
        required
        helperText={errVisible && !isValid ? validation(value) : ' '}
        error={errVisible && !isValid}
      />
    );
}

interface OptionalTextFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
}
export function OptionalTextFiled({
   label,
   value,
   onChange,
 }: OptionalTextFieldProps) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange(e.target.value);
  return (
    <CTextField
      label={label}
      placeholder={label}
      value={value}
      onChange={changeHandler}
      onBlur={changeHandler}
    />
  );
}
