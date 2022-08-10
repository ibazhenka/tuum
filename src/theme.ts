import { createTheme } from '@mui/material/styles';

// import RobotoRegular from '~/design-system/fonts/Roboto-Regular.ttf';
// import RobotoMonoRegular from '~/design-system/fonts/RobotoMono-Regular.ttf';
// import RobotoMedium from '~/design-system/fonts/Roboto-Medium.ttf';
// import RobotoBold from '~/design-system/fonts/Roboto-Bold.ttf';
// import OcrB from '~/design-system/fonts/ocrb.otf';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        scrollbar-width: thin;
        scrollbar-color: light;

       ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: hsl(190,39%,70%);
        }

        ::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        `,
    },
  },
  palette: {
    primary: {
      main: '#000000',
      dark: '#000000',
      light: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#728894',
      dark: '#465B66',
      light: '#A1B8C4',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#ff2f00',
      dark: '#E31B0C',
      light: '#F88078',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#ED6C02',
      dark: '#B33D00',
      light: '#FF9C3F',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      dark: '#087F23',
      light: '#80E27E',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#2196F3',
      dark: '#0069C0',
      light: '#6EC6FF',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: 'rgba(0,0,0, 1)',
      secondary: 'rgba(0,0,0,0.60)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    background: {
      default: 'hsl(190,39%,75%)',
      paper: 'hsl(190,39%,75%)',
    },
  },

  shadows: [
    'none',
    '0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.1)',
    '0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0px 3px 3px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)',
    '0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 1px 14px rgba(0, 0, 0, 0.12)',
    '0px 2px 8px rgba(0, 0, 0, 0.05), 0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 4px 5px rgba(0, 0, 0, 0.2), 0px 7px 10px rgba(0, 0, 0, 0.14), 0px 2px 16px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px 1px rgb(0, 0, 0)',
    '0px 5px 6px rgba(0, 0, 0, 0.2), 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12)',
    '0px 6px 6px rgba(0, 0, 0, 0.2), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 4px 18px rgba(0, 0, 0, 0.12)',
    '0px 6px 6px rgba(0, 0, 0, 0.2), 0px 11px 15px rgba(0, 0, 0, 0.14), 0px 4px 20px rgba(0, 0, 0, 0.12)',
    '0px 6px 7px rgba(0, 0, 0, 0.2), 0px 11px 15px rgba(0, 0, 0, 0.14), 0px 4px 20px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px rgba(0, 0, 0, 0.2), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px rgba(0, 0, 0, 0.2), 0px 13px 19px rgba(0, 0, 0, 0.14), 0px 5px 24px rgba(0, 0, 0, 0.12)',
    '0px 8px 9px rgba(0, 0, 0, 0.2), 0px 15px 22px rgba(0, 0, 0, 0.14), 0px 6px 28px rgba(0, 0, 0, 0.12)',
    '0px 8px 10px rgba(0, 0, 0, 0.2), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12)',
    '0px 8px 11px rgba(0, 0, 0, 0.2), 0px 17px 26px rgba(0, 0, 0, 0.14), 0px 6px 32px rgba(0, 0, 0, 0.12)',
    '0px 9px 11px rgba(0, 0, 0, 0.2), 0px 18px 28px rgba(0, 0, 0, 0.14), 0px 7px 34px rgba(0, 0, 0, 0.12)',
    '0px 9px 12px rgba(0, 0, 0, 0.2), 0px 19px 29px rgba(0, 0, 0, 0.14), 0px 7px 36px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px rgba(0, 0, 0, 0.2), 0px 21px 33px rgba(0, 0, 0, 0.14), 0px 8px 40px rgba(0, 0, 0, 0.12)',
    '0px 10px 14px rgba(0, 0, 0, 0.2), 0px 22px 35px rgba(0, 0, 0, 0.14), 0px 8px 42px rgba(0, 0, 0, 0.12)',
    '0px 11px 14px rgba(0, 0, 0, 0.2), 0px 23px 36px rgba(0, 0, 0, 0.14), 0px 9px 44px rgba(0, 0, 0, 0.12)',
    '0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 24px rgba(0, 0, 0, 0.1)',
  ],
  typography: {
    fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),

    fontSize: 16,

    h1: {
      fontWeight: 300,
      fontSize: 96,
      lineHeight: '112px',
    },

    h2: {
      fontWeight: 300,
      fontSize: 60,
      lineHeight: '72px',
    },

    h3: {
      fontWeight: 400,
      fontSize: 40,
      lineHeight: '50px',
    },

    h4: {
      fontWeight: 400,
      fontSize: 34,
      lineHeight: '42px',
    },

    h5: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '32px',
    },

    h6: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: '32px',
    },

    subtitle1: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '28px',
    },

    subtitle2: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '28px',
    },

    body1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
    },

    body2: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '28px',
    },

    button: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '24px',
    },

    caption: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '20px',
    },

    overline: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '32px',
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 0,
  },
});
