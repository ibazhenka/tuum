import React from 'react';
import { Checkbox,
  FormControlLabel,
  FormGroup, FormHelperText,
} from '@mui/material';
import { CLink } from '../elements/link';

interface ConsentProps {
  value: boolean
  visibleError: boolean
  onChange: (value: boolean) => void
  onChangeNewsConsent: (value: boolean) => void
}
export function Consent({
  value,
  onChange,
  visibleError,
  onChangeNewsConsent,
}: ConsentProps) {
  return (
    <FormGroup sx={{ marginTop: 4 }}>
      <FormControlLabel
        control={(
          <Checkbox
            required
            checked={value}
            onChange={(e) => {
              onChange(e.target.checked);
            }}
          />
            )}
        label={(
          <>By submitting this form I accept
            {' '}
            <CLink
              href="https://tuumplatform.com/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              privacy policy and cookie
              policy
            </CLink>.*
          </>
            )}
      />
      <FormHelperText error>{!value && visibleError ? '*Required' : ' '}</FormHelperText>
      <FormControlLabel
        control={(
          <Checkbox
            onChange={(e) => onChangeNewsConsent(e.target.checked)}
          />
            )}
        label="I would like to receive your newsletter."
      />
    </FormGroup>
  );
}
