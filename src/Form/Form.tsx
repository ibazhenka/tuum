import React, { useState } from 'react';
import {
  Box,
} from '@mui/material';
import { IndustrySelect } from './IndustrySelect';
import { CountrySelect } from './CountrySelect';
import { SubmitDialog } from '../SubmitDialog/SubmitDialog';
import { SubmitButton } from '../elements/submit-button';
import { theme } from '../theme';
import { OperatingGeographySelect } from './OperatingGeographySelect';
import { CTextarea } from './Textarea';
import { Consent } from './Consent';
import { OptionalTextFiled, RequiredTextField } from './TextField';

const requireField = (value: string) => !value ? '*Required' : '';
const emailValidate = (value: string) => {
  if (!value) {
    return '*Required';
  }
  if (!/^(.+)@(.+)$/.test(value)) {
    return 'Please enter a valid email address';
  }
  return '';
};

interface FormProps {
  onSubmit: (formData: {
    firstName: string,
    lastName: string,
    email: string,
    jobTitle: string,
    industry: string,
    companyName: string,
    country: string,
    operatingGeography: string,
    talkAbout: string,
    consent: boolean,
    newsletter: boolean
  })=> Promise<void>
}
export function Form({ onSubmit }: FormProps) {
  const [showAllErrors, setAllErrors] = useState(false);
  const [firstName, setFirstName] = useState({
    value: '',
    isValid: !requireField(''),
  });
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState({
    value: '',
    isValid: !emailValidate(''),
  });
  const [companyName, setCompanyName] = useState({
    value: '',
    isValid: !requireField(''),
  });
  const [industry, setIndustry] = useState({
    value: '',
    isValid: !requireField(''),
  });
  const [country, setCountry] = useState({
    value: '',
    isValid: !requireField(''),
  });
  const [operatingGeography, setOperatingGeography] = useState('');
  const [consent, setConsent] = useState(false);

  const [talkAbout, setTalkAbout] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [open, setOpen] = React.useState(false);
  const form = {
    data: {
      firstName: firstName.value,
      lastName,
      email: email.value,
      industry: industry.value,
      companyName: companyName.value,
      country: country.value,
      jobTitle,
      operatingGeography,
      consent,
      talkAbout,
      newsletter
    },
    isValid: firstName.isValid
      && email.isValid
      && companyName.isValid
      && industry.isValid
      && country.isValid
      && consent
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
        gap: `${theme.spacing(1.5, 3)}`,
      }}
      >
        <RequiredTextField
          label="First name"
          {...firstName}
          visibleError={showAllErrors}
          onChange={setFirstName}
          validation={requireField}
        />
        <OptionalTextFiled
          label="Last name"
          value={lastName}
          onChange={setLastName}
        />

        <RequiredTextField
          label="Email"
          {...email}
          visibleError={showAllErrors}
          onChange={setEmail}
          validation={emailValidate}
        />

        <OptionalTextFiled
          value={jobTitle}
          onChange={setJobTitle}
          label="Job title"
        />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: `${theme.spacing(1.5, 3)}`, marginTop: 6 }}>
        <RequiredTextField
          label="Company name"
          {...companyName}
          visibleError={showAllErrors}
          onChange={setCompanyName}
          validation={requireField}
        />
        <IndustrySelect
          {...industry}
          onChange={setIndustry}
          visibleError={showAllErrors}
          validation={requireField}
        />
        <CountrySelect
          {...country}
          onChange={setCountry}
          visibleError={showAllErrors}
          validation={requireField}
        />
        <OperatingGeographySelect
          value={operatingGeography}
          onChange={setOperatingGeography}
        />
      </Box>
      <Box sx={{ marginTop: 6 }}>
        <CTextarea value={talkAbout} onChange={setTalkAbout} />
        <Consent
          value={consent}
          visibleError={showAllErrors}
          onChange={setConsent}
          onChangeNewsConsent={setNewsletter}
        />
      </Box>
      <div
        tabIndex={0}
        role="button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setAllErrors(true);
        }}
      >
        <SubmitButton
          disabled={!form.isValid}
          onClick={async () => {
            await onSubmit(form.data);
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
        }}
      />
    </Box>
  );
}
