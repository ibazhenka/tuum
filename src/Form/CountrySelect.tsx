import React, { useCallback } from 'react';
import { ListItemText, MenuItem, Stack } from '@mui/material';
import countries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json';
import { CSelect, CSelectProps } from '../elements/select';

countries.registerLocale(english);

export function CountrySelect(props: Omit<CSelectProps, 'children'|'label'>) {
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
    <CSelect {...props} label="Country">
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
