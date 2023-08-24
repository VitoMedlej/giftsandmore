"use client"
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import {AiFillAudio} from 'react-icons/ai'


import {AiOutlineWhatsApp,AiOutlineInstagram,AiFillFacebook} from 'react-icons/ai'
import EmailInput from './EmailInput'
import useLanguage from '@/Hooks/useLanguage'



const Perks = () => {
  const {text} = useLanguage()

    return (
       <Box sx={{my:8}}>
            <Box sx={{mb:4,justifyContent:{xs:'center',sm:'justify-between'}}} className="flex wrap  ">

{[1,2,3].map(i=>{
    return <Box key={i} sx={{mt:1,width:{xs:'48%',sm:'32%'}}} className='flex row center  items-center'>
    <Box sx={{mx:.5}}>
            <AiFillAudio  fontSize='2em'/>
    </Box>
    <Box>
        <Typography  sx={{fontSize:'1.25em',fontWeight:600}}> 
{text('Have any questions?',`لديك أي أسئلة؟`)}
        </Typography>
        <Typography className='clr'>
            +961 76561580
        </Typography>
    </Box>
</Box>})}
</Box>
       </Box>
    )
}

export default Perks