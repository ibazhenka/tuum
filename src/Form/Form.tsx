import React from 'react';
import {
  Box, ButtonBase, Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Select,
  TextField,
} from '@mui/material';
import { CTextField } from '../text-field';
import { CLink } from '../link';

export function Form() {
  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gridArea: 'form', width: '75%', paddingBottom: 8 }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <CTextField label="First name" placeholder="First name" required />
        <CTextField label="Last name" placeholder="Last name" required />
        <CTextField label="Email" placeholder="Email" required />
        <CTextField label="Job title" placeholder="Job title" />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 8 }}>
        <CTextField label="Company name" placeholder="Company name" required />
        <FormControl sx={{ width: 'calc(50% - 12px )' }}>
          <InputLabel>Industry</InputLabel>
          <Select variant="standard" inputProps={{ required: true, placeholder: 'Industry' }} />
        </FormControl>
        <FormControl sx={{ width: 'calc(50% - 12px )' }}>
          <InputLabel>Country</InputLabel>
          <Select variant="standard" label="Country" required />
        </FormControl>
        <FormControl sx={{ width: 'calc(50% - 12px )' }}>
          <InputLabel>Operating geography</InputLabel>
          <Select variant="standard" label="Operating geography" />
        </FormControl>
      </Box>
      <Box sx={{ marginTop: 8 }}>
        <InputLabel color="primary">What would you like to talk about?</InputLabel>
        <TextField fullWidth multiline rows={3} sx={{ marginTop: 0.5 }} />
        <FormGroup sx={{ marginTop: 4 }}>
          <FormControlLabel
            control={<Checkbox />}
            label={(
              <>By submitting this form I accept
                <CLink
                  href="https://tuumplatform.com/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  privacy policy and cookie
                  policy
                </CLink>.
              </>
            )}
          />
          <FormControlLabel control={<Checkbox />} label="I would like to receive your newsletter." />
        </FormGroup>

      </Box>
      <ButtonBase
        type="submit"
        sx={{
          width: 'fit-content',
          position: 'relative',
          marginTop: 4,
          background: 'transparent',
          border: 'none',
          fontSize: 24,
          lineHeight: '32px',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            display: 'block',
            width: '100%',
            height: '1px',
            background: 'black',
            transition: 'all 0.5s cubic-bezier(.4, 0, .2, 1)',
          },

          '&:hover:after': {
            background: 'transparent',
          },

          '&:disabled': {
            opacity: 0.38,

          }
        }}
      >
        Submit Form
      </ButtonBase>
    </Box>
  );
}
