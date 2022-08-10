import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { CLink } from '../elements/link';

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
        <Typography variant="body2">Media enquiries:</Typography>
        <CLink
          variant="body2"
          href="mailto:press@tuumplatform.com"
        >press@tuumplatform.com
        </CLink>
      </Stack>
      <Stack>
        <Typography variant="body2">Career questions:</Typography>
        <CLink variant="body2" href="mailto:careers@tuumplatform.com">careers@tuumplatform.com</CLink>
      </Stack>
    </Box>
  );
}
