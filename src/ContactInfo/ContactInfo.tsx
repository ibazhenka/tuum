import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { CLink } from '../link';

export function ContactInfo() {
  return (
    <Box
      component="aside"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3.5,
        gridArea: 'aside',
      }}
    >
      <Stack>
        <Typography>Media enquiries:</Typography>
        <CLink
          href="mailto:press@tuumplatform.com"
        >press@tuumplatform.com
        </CLink>
      </Stack>
      <Stack>
        <Typography>Career questions:</Typography>
        <CLink href="mailto:careers@tuumplatform.com">careers@tuumplatform.com</CLink>
      </Stack>
    </Box>
  );
}
