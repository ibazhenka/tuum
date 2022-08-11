import React, { ReactNode } from 'react';
import {
  ButtonBase,
} from '@mui/material';
import { ButtonBaseProps } from '@mui/material/ButtonBase/ButtonBase';
import { theme } from '../theme';

export function SubmitButton({ children, ...props }: {children: ReactNode} & ButtonBaseProps) {
  return (
    <ButtonBase
      type="submit"
      sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: 'fit-content',
            position: 'relative',
            marginTop: 4,
            background: 'transparent',
            border: 'none',
            fontSize: '24px',
            lineHeight: '32px',

            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              display: 'block',
              width: '100%',
              height: '1px',
              background: theme.palette.text.primary,
              transition: 'all 0.5s cubic-bezier(.4, 0, .2, 1)',
            },

            '&:hover:after': {
              width: 0,
              background: 'transparent',
            },

            '&:disabled': {
              opacity: 0.38,
            },

            '&:disabled:hover:after': {
              width: '100%',
              background: theme.palette.text.primary,
            }
          }}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
