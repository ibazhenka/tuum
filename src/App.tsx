import React from 'react';
import './App.css';
import {
  Box, CssBaseline,
  Typography
} from '@mui/material';
import { theme } from './theme';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { Form } from './Form/Form';
import { DesignSystemProvider } from './provider';

function App() {
  return (
    <DesignSystemProvider>
      <CssBaseline />
      <Box sx={{ background: theme.palette.background.default }}>
        <Box
          component="section"
          sx={{
            display: 'grid',
            gridTemplateAreas: '"header header header" "aside form form"',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 3,
            maxWidth: '1216px',
            margin: '0 auto',
            padding: '0 32px',
            boxSizing: 'border-box',
          }}
        >
          <Typography
            sx={{ paddingTop: 10, paddingBottom: 5, gridArea: 'header', gridColumnStart: 2, }}
            component="h1"
            variant="h3"
          >Contact us
          </Typography>
          <ContactInfo />
          <Form />
        </Box>
      </Box>
    </DesignSystemProvider>
  );
}

export default App;
