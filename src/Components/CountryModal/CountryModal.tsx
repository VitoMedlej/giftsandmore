"use client"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { loadState, saveState } from '@/Utils/LocalstorageFn';
import CountrySelect from './CountrySelect';
import { useRateContext } from '@/context/Contexts';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({modalOpen,setModalOpen} : {modalOpen : boolean, setModalOpen : any}) {
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const {rate,setRate} = useRateContext()
 


  React.useEffect(() => {
    
      const isModalOpened = loadState('isModalOpened')
      if (!isModalOpened) {
        setModalOpen(true);
        saveState('isModalOpened',true)
        return;
      }
      
  }, [])
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title"  className='text-center center' variant="h6" component="h2">
              Welcome To Gifts And More!
            </Typography>
            <Typography id="transition-modal-description" className='text-center center' sx={{ mt: 2 }}>
            Please Select Your Country/Currency.
            </Typography>
          <CountrySelect rate={rate} setRate={setRate}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
