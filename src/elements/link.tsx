import React, { ReactNode } from 'react';
import { Link } from '@mui/material';
import { LinkProps } from '@mui/material/Link/Link';

interface CLinkProps extends LinkProps {
  children: ReactNode;
}

export function CLink({ children, ...props }: CLinkProps) {
  return (
    <Link
      sx={{ color: 'inherit',
        textDecoration: 'inherit',
        opacity: 0.6,
        '&:hover': {
          opacity: 1
        } }}
      {...props}
    >{children}
    </Link>
  );
}
