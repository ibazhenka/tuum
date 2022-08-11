import React, { useCallback } from 'react';
import { ListItemText, MenuItem, Stack } from '@mui/material';
import countries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json';
import { CSelect } from '../elements/select';

countries.registerLocale(english);

interface CountrySelectProps {
  value: string
  isValid: boolean
  visibleError: boolean
  onChange: (data: { value: string, isValid: boolean, visibleError: boolean }) => void
  validation: (value: string) => string
}

export function CountrySelect({
    visibleError,
    isValid,
    validation,
    onChange,
    value,
    ...props
  }: CountrySelectProps) {
  const countryList = countries.getNames('en', { select: 'official' });
  const alfa3List = countries.getAlpha2Codes();
  const alfa2List = Object.keys(countries.getAlpha2Codes());
  const countryNamesCodes = alfa2List.map((el) => ({
    alfa2: el,
    countryName: countryList[el],
    alfa3: alfa3List[el]
  }));

  const handleFlagImg = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const target = event.target as HTMLImageElement;
      if (target.src) {
        target.src = './flags/unknown.svg';
      }
    }, []
  );

  return (
    <CSelect
      {...props}
      value={value}
      error={!isValid && visibleError}
      helperText={visibleError && !isValid ? validation(value) : ' '}
      label="Country"
      onChange={(newValue) => onChange({
        value: newValue,
        isValid: !validation(newValue),
        visibleError: true,
      })}
    >
      <MenuItem value="N/A">N/A</MenuItem>
      {countryNamesCodes.map((el) => (
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
    </CSelect>
  );
}
