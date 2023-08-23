

// <Typography  sx={{fontSize:{xs:'.7em',sm:'.8em'},  }} className={`animated-text ${isAnimating ? 'animate' : ''} center text-center`}>
// Cash on delivery all over Lebanon 3$ | Free Delivery for orders above 50$ 
      
//       </Typography>








"use client"
import { Typography } from '@mui/material';
import React from 'react';

const AnimatedText = () => {
  return (
    // <div className="text-container">
    //   <h1 className="animated-text">Your Animated Text</h1>
    // </div>
  <Typography  sx={{fontSize:{xs:'.7em',sm:'.8em'},  }} className={`animated-text  ? 'animate' : ''} center text-center`}>
Cash on delivery all over Lebanon 3$ | Free Delivery for orders above 50$ 
      
      </Typography>
    );
};

export default AnimatedText;