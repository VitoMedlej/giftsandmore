"use client"
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import {AiFillAudio} from 'react-icons/ai'
import { AiFillPhone, AiFillInstagram, AiFillMail } from 'react-icons/ai';

import {AiOutlineWhatsApp,AiOutlineInstagram,AiFillFacebook} from 'react-icons/ai'
import EmailInput from './EmailInput'
import useLanguage from '@/Hooks/useLanguage'


const contacInfo = [
    {
      title: { en: 'Have a question?', ar: 'هل لديك سؤال؟' },
      value: '123456',
      Icon: AiFillPhone,
    },
    {
      title: { en: 'Follow us on Instagram', ar: 'تابعنا على إنستغرام' },
      value: '@example_instagram',
      Icon: AiFillInstagram,
    },
    {
      title: { en: 'Email us', ar: 'أرسل لنا بريدًا إلكترونيًا' },
      value: 'contact@example.com',
      Icon: AiFillMail,
    },
  ];
const Perks = () => {
  const {text} = useLanguage()

    return (
       <Box sx={{my:8}}>
            <Box sx={{mb:4,justifyContent:{xs:'center',sm:'justify-between'}}} className="flex wrap  ">

{contacInfo.map(i=>{
    return <Box key={i?.title.en} sx={{mt:1,width:{xs:'48%',sm:'32%'}}} className='flex row center  items-center'>
    <Box sx={{mx:.5}}>
            <i.Icon  fontSize='2em'/>
    </Box>
    <Box>
        <Typography  sx={{fontSize:'1.25em',fontWeight:600}}> 
{text(i.title.en,i.title.ar)}
        </Typography>
        <Typography className='clr'>
           {i.value}
        </Typography>
    </Box>
</Box>})}
</Box>
       </Box>
    )
}

export default Perks