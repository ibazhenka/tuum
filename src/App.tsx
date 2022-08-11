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
      <Box component="main" sx={{ background: theme.palette.background.default }}>
        <Box
          component="section"
          sx={{
            display: 'grid',
            gridTemplateAreas: '"header header header" "aside form form"',
            gridTemplateColumns: 'minmax(250px, auto) repeat(2, minmax(0, 1fr))',
            gap: '56px 24px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: `${theme.spacing(10, 4, 8)}`,
            boxSizing: 'border-box',

            [theme.breakpoints.down(768)]: {
              gridTemplateAreas: '"header" "aside" "form"',
              gridTemplateColumns: '1fr',
              gap: 3,
            }
          }}
        >
          <Typography
            sx={{
              gridArea: 'header',
              gridColumnStart: 2,
              [theme.breakpoints.down(768)]: {
                gridColumnStart: 1,
                textAlign: 'center',
              }
            }}
            component="h1"
            variant="h3"
          >
            Contact us
          </Typography>
          <ContactInfo />
          <Form
            onSubmit={async (d) => console.log(d)}
          />
        </Box>
      </Box>
    </DesignSystemProvider>
  );
}

export default App;
