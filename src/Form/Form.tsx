import React, { useCallback, useState } from 'react';
import {
  Box, Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup, FormHelperText,
  InputLabel, ListItemText, MenuItem,
  Select, Stack,
  TextField,
} from '@mui/material';
import countries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json';
import { SubmitDialog } from '../SubmitDialog/SubmitDialog';
import { SubmitButton } from '../elements/submit-button';
import { theme } from '../theme';
import { CTextField } from '../elements/text-field';
import { CLink } from '../elements/link';

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

  const [open, setOpen] = React.useState(false);

  const requireCheck = () => {
    setFirstNameError(!firstName);
    setEmailError(!email);
    setCompanyNameError(!companyName);
    setIndustryError(!industry);
    setCountryError(!country);
    setConsentError(!consent);
  };

  const cleanForm = () => {
    setFirstName('');
    setEmail('');
    setCompanyName('');
    setIndustry('');
    setCountry('');
    setConsent(false);
  };

  const countryList = countries.getNames('en', { select: 'official' });
  const alfa3List = countries.getAlpha2Codes();
  const alfa2Arr = Object.keys(countries.getAlpha2Codes());
  const mapping = alfa2Arr.map((el) => ({ alfa2: el,
  countryName: countryList[el],
  alfa3: alfa3List[el] }));

  const handleFlagImg = useCallback(
    (event) => {
      event.target.src = './flags/unknown.svg';
    }, []
  );

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gridArea: 'form',
        width: '75%',
        [theme.breakpoints.down(1024)]: {
          width: '100%',
        }
      }}
    >
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px 24px',
      }}
      >
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px', marginTop: 6 }}>
        <CTextField
          label="Company name"
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company name"
          required
          onBlur={() => setCompanyNameError(!companyName)}
          helperText={companyNameError ? '*Required' : ' '}
          error={companyNameError}
        />
        <FormControl
          required
          variant="standard"
          sx={{
          width: 'calc(50% - 12px )',
          [theme.breakpoints.down(600)]: {
            width: '100%'
          },
        }}
        >
          <InputLabel error={industryError}>Industry</InputLabel>
          <Select
            defaultValue=""
            error={industryError}
            onBlur={() => setIndustryError(!industry)}
            onChange={(e) => setIndustry(String(e.target.value))}
          >
            {industryList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
          </Select>
          <FormHelperText error>{industryError ? '*Required' : ' '}</FormHelperText>
        </FormControl>
        <FormControl
          required
          variant="standard"
          sx={{
            width: 'calc(50% - 12px )',
            [theme.breakpoints.down(600)]: {
              width: '100%'
            },
          }}
        >
          <InputLabel error={countryError}>Country</InputLabel>
          <Select
            defaultValue=""
            error={countryError}
            onBlur={() => setCountryError(!country)}
            onChange={(e) => setCountry(String(e.target.value))}
            label="Country"
            required
            sx={{ display: 'flex' }}
          >
            <MenuItem value="N/A">N/A</MenuItem>
            {mapping.map((el) => (
              <MenuItem key={el.alfa2} value={el.countryName} sx={{ flexWrap: 'nowrap' }}>
                <Stack direction="row" sx={{ alignItems: 'center', gap: 1, height: '23px' }}>
                  <img
                    width={20}
                    height={20}
                    src={`/flags/${el.alfa3}.svg`}
                    alt={el.alfa3}
                    onError={handleFlagImg}
                  />
                  <ListItemText>{el.countryName}</ListItemText>
                </Stack>
              </MenuItem>
))}
          </Select>
          <FormHelperText error>{countryError ? '*Required' : ' '}</FormHelperText>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{
            width: 'calc(50% - 12px )',
            [theme.breakpoints.down(600)]: {
              width: '100%'
            },
          }}
        >
          <InputLabel>Operating geography</InputLabel>
          <Select label="Operating geography" defaultValue="">
            {operatingGeographyList.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: 6 }}>
        <InputLabel sx={{ color: theme.palette.text.primary }}>What would you like to talk about?</InputLabel>
        <TextField fullWidth multiline rows={3} sx={{ marginTop: 0.5 }} />
        <FormGroup sx={{ marginTop: 4 }}>
          <FormControlLabel
            control={(
              <Checkbox
                required
                onChange={(e) => {
              setConsent(e.target.checked);
              setConsentError(!e.target.checked);
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
          <FormHelperText error>{consentError ? '*Required' : ' '}</FormHelperText>
          <FormControlLabel control={<Checkbox />} label="I would like to receive your newsletter." />
        </FormGroup>

      </Box>
      <div
        tabIndex={0}
        role="button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (!firstName || !email || !industry || !companyName || !country || !consent) {
            requireCheck();
          }
      }}
      >
        <SubmitButton
          disabled={!firstName || !email || !industry || !companyName || !country || !consent}
          onClick={() => {
          setOpen(!open);
        }}
        >
          Submit Form
        </SubmitButton>
      </div>
      <SubmitDialog
        open={open}
        handleDialog={() => {
          setOpen(!open);
          cleanForm();
        }}
      />
    </Box>
  );
}
