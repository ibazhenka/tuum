import React, { useCallback, useEffect, useState } from 'react';
import { ListItemText, MenuItem, Stack } from '@mui/material';
import countries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json';
import { CSelect } from '../elements/select';

countries.registerLocale(english);

interface CountrySelectProps {
  value: string
  isValid: boolean
  visibleError: boolean
  onChange: (data: { value: string, isValid: boolean }) => void
  validation: (value: string) => string
}

function Flag({ alfa3, index }: {alfa3: string, index: number}) {
  const handleFlagImg = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const target = event.target as HTMLImageElement;
      if (target.src) {
        target.src = './flags/unknown.svg';
      }
    }, []
  );
  const [src, setSrc] = useState(undefined);
  useEffect(() => {
    const delay = Math.round(index / 30) * 100;
    setTimeout(() => setSrc(`/flags/${alfa3}.svg`), delay);
  }, []);
  return (
    <img
      width={20}
      height={20}
      src={src}
      alt={alfa3}
      onError={handleFlagImg}
    />
  );
}

export function CountrySelect({
    visibleError,
    isValid,
    validation,
    onChange,
    value,
  }: CountrySelectProps) {
  const [finishEditing, setFinishEditing] = useState(false);
  const countryList = countries.getNames('en', { select: 'official' });
  const alfa3List = countries.getAlpha2Codes();
  const alfa2List = Object.keys(countries.getAlpha2Codes());
  const countryNamesCodes = alfa2List.map((el) => ({
    alfa2: el,
    countryName: countryList[el],
    alfa3: alfa3List[el]
  }));

  return (
    <CSelect
      value={value}
      error={!isValid && (visibleError || finishEditing)}
      helperText={visibleError && !isValid ? validation(value) : ' '}
      label="Country*"
      onChange={(newValue) => {
       onChange({
          value: newValue,
          isValid: !validation(newValue),
        });
        setFinishEditing(true);
}}
    >
      <MenuItem value="N/A">N/A</MenuItem>
      {countryNamesCodes.map((el, index) => (
        <MenuItem key={el.alfa2} value={el.countryName} sx={{ flexWrap: 'nowrap' }}>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1, height: '23px' }}>
            <Flag alfa3={el.alfa3} index={index} />
            <ListItemText>{el.countryName}</ListItemText>
          </Stack>
        </MenuItem>
            ))}
    </CSelect>
  );
}
