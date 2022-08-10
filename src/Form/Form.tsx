import React, { useState } from 'react';
import {
  Box,
} from '@mui/material';
import { IndustrySelect } from './IndustrySelect';
import { CountrySelect } from './CountrySelect';
import { SubmitDialog } from '../SubmitDialog/SubmitDialog';
import { SubmitButton } from '../elements/submit-button';
import { theme } from '../theme';
import { CTextField } from '../elements/text-field';
import { OperatingGeographySelect } from './OperatingGeographySelect';
import { CTextarea } from './Textarea';
import { Consent } from './Consent';

export function Form() {
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [industry, setIndustry] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(false);

  const [lastName, setLastName] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [operatingGeography, setOperatingGeography] = useState<string>('');
  const [talkAbout, setTalkAbout] = useState<string>('');
  const [newsletter, setNewsletter] = useState<boolean>(false);

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
        <CTextField
          onChange={(e) => setLastName(e.target.value)}
          label="Last name"
          placeholder="Last name"
        />
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
        <CTextField onChange={(e) => setJobTitle(e.target.value)} label="Job title" placeholder="Job title" />
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
        <IndustrySelect
          value={industry}
          onChange={setIndustry}
          error={industryError}
          setError={setIndustryError}
          required
        />
        <CountrySelect
          value={country}
          onChange={setCountry}
          setError={setCountryError}
          error={countryError}
          required
        />
        <OperatingGeographySelect
          value={operatingGeography}
          onChange={setOperatingGeography}
        />
      </Box>
      <Box sx={{ marginTop: 6 }}>
        <CTextarea onChange={setTalkAbout} />
        <Consent
          onChangeConsent={setConsent}
          error={consentError}
          onChangeNewsConsent={setNewsletter}
          setError={setConsentError}
        />
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
            console.log(firstName, lastName, email, jobTitle, industry, companyName, country, operatingGeography, consent, talkAbout, newsletter);
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
