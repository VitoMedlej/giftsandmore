

// // <Typography  sx={{fontSize:{xs:'.7em',sm:'.8em'},  }} classNameNameNameNameName={`animated-text ${isAnimating ? 'animate' : ''} center text-center`}>
// // Cash on delivery all over Lebanon 3$ | Free Delivery for orders above 50$ 
      
// //       </Typography>








// "use client"
// import useLanguage from '@/Hooks/useLanguage';
// import { Typography } from '@mui/material';
// import React from 'react';

// const AnimatedText = () => {
//   const {text} = useLanguage()
  
//   return (
//     // <div classNameNameNameNameName="text-container">
//     //   <h1 classNameNameNameNameName="animated-text">Your Animated Text</h1>
//     // </div>
// //   <Typography  sx={{fontSize:{xs:'.7em',sm:'.8em'}, py:2, background:'#f5f5f5' }} classNameNameNameNameName={`center text-center`}>
// // {
// //   text(`Cash on delivery all over Lebanon 3$ | Free Delivery for orders above 50$`,`الدفع عند الاستلام في جميع أنحاء لبنان 3$ | التوصيل مجاني للطلبات التي تزيد قيمتها عن 50 دولارًا`)
// // }
      
// //       </Typography>
    
// <>
// <div id="no01" classNameName="wrapper">
//   <div classNameName="boxes">
//     <div classNameName="box">GreenSock</div>
//     <div classNameName="box">Nice Tool</div>
//     <div classNameName="box">GreenSock</div>
//     <div classNameName="box">Animate</div>
//     <div classNameName="box">Fast & easy</div>
//     <div classNameName="box">GreenSock</div>
//     <div classNameName="box">The best</div>
//   </div>
// </div>

// <div id="no02" classNameName="wrapper">
//   <div classNameName="boxes">
//     <div classNameName="box">GreenSock</div>
//     <div classNameName="box">Nice Tool</div>
//     <div classNameName="box">GreenSock</div>
//     <div classNameName="box">Animate</div>
//     <div classNameName="box">Fast & easy</div>
//     <div classNameName="box">GreenSock</div>
//     <div classNameName="box">The best</div>
//   </div>
// </div>

// <div id="no03" classNameName="wrapper">
//   <div classNameName="boxes">
//     <div classNameName="box">GreenSock</div>
//     <div classNameName="box">Nice Tool</div>
//     <div classNameName="box">GreenSock</div>
//     <div classNameName="box">Animate</div>
//     <div classNameName="box">Fast & easy</div>
//     <div classNameName="box">GreenSock</div>
//     <div classNameName="box">The best</div>
//   </div>
// </div>

// </>



// );
// };

// export default AnimatedText;






"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MarqueeComponent = () => {
  const wrapperRefs : any = useRef([]);

  useEffect(() => {
    wrapperRefs.current.forEach((wrapper:any, index:any) => {
      const boxWidth = 250;
      const totalWidth = boxWidth * 7; // * n of boxes
      const boxes = wrapper.querySelectorAll('.box');
      const dirFromLeft = `+=${totalWidth}`;
      const dirFromRight = `-=${totalWidth}`;
      const mod = gsap.utils.wrap(0, totalWidth);

      function marquee(which : any, time:any, direction:any) {
        gsap.set(which, {
          x: i => i * boxWidth,
        });

        const action = gsap.timeline().to(which, {
          x: direction,
          modifiers: {
            x: x => mod(parseFloat(x)) + 'px',
          },
          duration: time,
          ease: 'none',
          repeat: -1,
        });

        return action;
      }

      const timeline = gsap.timeline();
      timeline.add(marquee(boxes, 15, dirFromLeft), 1 + index);

      return () => {
        timeline.kill();
      };
    });
  }, []);

  return (
    <div className='w100'  >
      <div id="no01" className="wrapper" ref={el => (wrapperRefs.current[0] = el)}>
        {/* <div classNameName="boxes"> */}
          {/* <div classNameName="box">Cash on delivery all over Lebanon 3$ | Free Delivery for orders above 50$</div> */}
          {/* <div classNameName="box">Cash on delivery all over Lebanon 3$ | Free Delivery for orders above 50$</div> */}
          {/* <div classNameName="box">Nice Tool</div>
          <div classNameName="box">GreenSock</div>
          <div classNameName="box">Animate</div>
          <div classNameName="box">Fast & easy</div>
          <div classNameName="box">GreenSock</div>
          <div classNameName="box">The best</div> */}
        {/* </div> */}
        <div className="boxes">
    {/* <div className="box">all over Lebanon 3$</div> */}
    <div className="box">Cash </div>
    <div className="box">on</div>
    <div className="box">delivery</div>
    {/* <div className="box">Free Delivery for</div> */}
    {/* <div className="box">orders above $50</div> */}
    {/* <div className="box">Cash on delivery</div> */}
    {/* <div className="box">all over Lebanon 3$</div> */}
  </div>
</div>

    
    </div>
  );
};

export default MarqueeComponent;