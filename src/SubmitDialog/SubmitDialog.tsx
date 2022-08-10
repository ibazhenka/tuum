import React, { forwardRef } from 'react';
import {
  Box,
  Dialog,
  IconButton, Slide, Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

function Slider(props: TransitionProps & { children: React.ReactElement<any, any>},
  ref: React.Ref<unknown>) {
  return <Slide direction="right" ref={ref} {...props} />;
}
const Transition = forwardRef(Slider);

export function SubmitDialog({ open, handleDialog }) {
  return (
    <Dialog
      TransitionComponent={Transition}
      fullScreen
      open={open}
      onClose={handleDialog}
    >
      <Box sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        padding: 3,
      }}
      >
        <IconButton
          color="inherit"
          onClick={handleDialog}
          aria-label="close"
          sx={{
            position: 'absolute',
            top: 24,
            right: 24
          }}
        >
          X
        </IconButton>
        <Typography variant="h4" component="h4">All good!</Typography>
        <Typography variant="body2" component="p">Thank you for your interest!&nbsp;You can close this form by pressing
          “X” on the top right corner.
        </Typography>
      </Box>
    </Dialog>
  );
}
