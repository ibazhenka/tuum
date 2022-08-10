import React from 'react';
import { Checkbox,
  FormControlLabel,
  FormGroup, FormHelperText,
} from '@mui/material';
import { CLink } from '../elements/link';

export function Consent({ onChangeConsent, setError, error, onChangeNewsConsent }) {
  return (
    <FormGroup sx={{ marginTop: 4 }}>
      <FormControlLabel
        control={(
          <Checkbox
            required
            onChange={(e) => {
              onChangeConsent(e.target.checked);
              setError(!e.target.checked);
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
      <FormHelperText error>{error ? '*Required' : ' '}</FormHelperText>
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
