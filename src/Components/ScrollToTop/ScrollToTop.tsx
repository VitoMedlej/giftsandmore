"use client"
import { Box } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import {BsArrowUpShort} from 'react-icons/bs'
const ScrollUp = () => {
    

  return (
    <Box className='flex row center flex align-center' sx={{position:'fixed',zIndex:4124,bottom:'6%',right:'2%'}}>


    <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' rel='noopener'>

    <Btn sx={{ border:'1px solid transparent',
    borderRadius:25,
    padding:0,':hover':{background:'transparent'},background:'none'}}>
      <Box className='center flex align-center' sx={{width:'40px'}}>

      <img src="https://1.bp.blogspot.com/-PM8_Rig8V0M/XxFkv-2f3hI/AAAAAAAACSU/vB1BqbuhFCMyJ8OGCVstFiMLFmavCLqrwCPcBGAYYCw/s1600/whatsapp-logo-1.png" alt="Whatsapp Icon" className="img" />
      </Box>
    </Btn>
    </a>

    </Box>
  )
}

export default ScrollUp