

// <Typography  sx={{fontSize:{xs:'.7em',sm:'.8em'},  }} className={`animated-text ${isAnimating ? 'animate' : ''} center text-center`}>
// Cash on delivery all over Lebanon 3$ | Free Delivery for orders above 50$ 
      
//       </Typography>








"use client"
import useLanguage from '@/Hooks/useLanguage';
import { Typography } from '@mui/material';
import React from 'react';

const AnimatedText = () => {
  const {text} = useLanguage()
  
  return (
    // <div className="text-container">
    //   <h1 className="animated-text">Your Animated Text</h1>
    // </div>
  <Typography  sx={{fontSize:{xs:'.7em',sm:'.8em'}, py:2, background:'#f5f5f5' }} className={`center text-center`}>
{
  text(`Cash on delivery all over Lebanon 3$ | Free Delivery for orders above 50$`,`الدفع عند الاستلام في جميع أنحاء لبنان 3$ | التوصيل مجاني للطلبات التي تزيد قيمتها عن 50 دولارًا`)
}
      
      </Typography>
    );
};

export default AnimatedText;