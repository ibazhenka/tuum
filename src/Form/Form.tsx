import React, { useState } from 'react';
import {
  Box, ButtonBase, Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup, FormHelperText,
  InputLabel, MenuItem,
  Select,
  TextField,
} from '@mui/material';
import countries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json';
import { theme } from '../theme';
import { CTextField } from '../text-field';
import { CLink } from '../link';

const operatingGeographyList = [
  'National',
  'Regional',
  'Global',
];

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

countries.registerLocale(english);

export function Form() {
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [industry, setIndustry] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(false);

  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [companyNameError, setCompanyNameError] = useState<boolean>(false);
  const [industryError, setIndustryError] = useState<boolean>(false);
  const [countryError, setCountryError] = useState<boolean>(false);
  const [consentError, setConsentError] = useState<boolean>(false);

  const requireCheck = () => {
    setFirstNameError(!firstName);
    setEmailError(!email);
    setCompanyNameError(!companyName);
    setIndustryError(!industry);
    setCountryError(!country);
    setConsentError(!consent);
  };

  const countryList = Object.values(countries.getNames('en'));

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gridArea: 'form', width: '75%', paddingBottom: 8 }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px' }}>
        <CTextField
          label="First name"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          required
          onBlur={() => setFirstNameError(!firstName)}
          helperText={firstNameError ? '*Required' : ' '}
          error={firstNameError}
        />
        <CTextField label="Last name" placeholder="Last name" />
        <CTextField
          label="Email"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          onBlur={() => setEmailError(!email)}
          helperText={emailError ? '*Required' : ' '}
          error={emailError}
        />
        <CTextField label="Job title" placeholder="Job title" />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px', marginTop: 8 }}>
        <CTextField
          label="Company name"
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company name"
          required
          onBlur={() => setCompanyNameError(!companyName)}
          helperText={companyNameError ? '*Required' : ' '}
          error={companyNameError}
        />
        <FormControl required variant="standard" sx={{ width: 'calc(50% - 12px )' }}>
          <InputLabel error={industryError}>Industry</InputLabel>
          <Select
            error={industryError}
            onBlur={() => setIndustryError(!industry)}
            onChange={(e) => setIndustry(String(e.target.value))}
          >
            {industryList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
          </Select>
          <FormHelperText error>{industryError ? '*Required' : ' '}</FormHelperText>
        </FormControl>
        <FormControl required variant="standard" sx={{ width: 'calc(50% - 12px )' }}>
          <InputLabel error={countryError}>Country</InputLabel>
          <Select
            error={countryError}
            onBlur={() => setCountryError(!country)}
            onChange={(e) => setCountry(String(e.target.value))}
            label="Country"
            required
          >
            <MenuItem value="N/A">N/A</MenuItem>
            {countryList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
          </Select>
          <FormHelperText error>{countryError ? '*Required' : ' '}</FormHelperText>
        </FormControl>
        <FormControl variant="standard" sx={{ width: 'calc(50% - 12px )' }}>
          <InputLabel>Operating geography</InputLabel>
          <Select label="Operating geography">
            {operatingGeographyList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: 8 }}>
        <InputLabel color="primary">What would you like to talk about?</InputLabel>
        <TextField fullWidth multiline rows={3} sx={{ marginTop: 0.5 }} />
        <FormGroup sx={{ marginTop: 4 }}>
          <FormControlLabel
            control={<Checkbox required onChange={(e) => setConsent(e.target.checked)} />}
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
          <FormHelperText error>{consentError ? '*Required' : ' '}</FormHelperText>
          <FormControlLabel control={<Checkbox />} label="I would like to receive your newsletter." />
        </FormGroup>

      </Box>
      <div tabIndex={0} role="button" onClick={() => requireCheck()}>
        <ButtonBase
          type="submit"
          disabled={!firstName || !email || !industry || !companyName || !country || !consent}
          onClick={(e) => {
          e.stopPropagation();
          alert('Click!');
        }}
          sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
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
            background: theme.palette.text.primary,
            transition: 'all 0.5s cubic-bezier(.4, 0, .2, 1)',
          },

          '&:hover:after': {
            width: 0,
            background: 'transparent',
          },

          '&:disabled': {
            opacity: 0.38,
          },

          '&:disabled:hover:after': {
            width: '100%',
            background: theme.palette.text.primary,
          }
        }}
        >
          Submit Form
        </ButtonBase>
      </div>
    </Box>
  );
}
