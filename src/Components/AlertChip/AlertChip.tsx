"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide, { SlideProps } from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useChipContext } from '@/context/Contexts';
import { Alert } from '@mui/material';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}



export default function AlertChip() {
  const {chipStatus, setChipStatus} = useChipContext();


  const handleClose = () => {
    setChipStatus({
      severity :'',
      text : '',
      open: false,
    });
  };

  return (
    <div>
    
      <Snackbar
        open={chipStatus.open}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        key={chipStatus.text}
      >
         <Alert severity={chipStatus.severity || 'success'}>{chipStatus.text}</Alert>
      </Snackbar>
    </div>
  );
}
