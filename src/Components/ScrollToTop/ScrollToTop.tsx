"use client"
import { Box } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import {BsArrowUpShort} from 'react-icons/bs'
const ScrollUp = () => {
    

  return (
    <Box className='flex row center flex align-center' sx={{position:'fixed',zIndex:4124,bottom:'6%',right:'2%'}}>


    <a style={{textDecoration:'none'}} href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' rel='noopener'>

    <Btn sx={{ border:'1px solid transparent',
    borderRadius:25,
    padding:0,':hover':{background:'transparent'},background:'none'}}>
         <Box sx={{mr:1,background:'white',py:1,px:3,boxShadow:'1px 1px 3px #00000021',borderRadius:25,color:'black'}}>
          Message Us
      </Box>
      <Box className='center flex align-center' sx={{width:'40px'}}>

      <img src="https://www.7979.org.my/uploads/1/2/6/3/126376279/whatsapp-icon_1.png" alt="Whatsapp Icon" className="img" />
      </Box>
   
    </Btn>
    </a>

    </Box>
  )
}

export default ScrollUp