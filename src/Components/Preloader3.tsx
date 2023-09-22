"use client"
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import  { Autoplay } from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';


const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {img : `https://media.glamour.com/photos/636a83577543e8480f8bfc1a/16:9/w_1600%2Cc_limit/best%2520lighted%2520makeup%2520mirrors.jpg`},
        { img : 'https://sassyselfdefense.com/cdn/shop/products/20230308_170326.jpg?v=1678324551&width=1200'},
       
     ])
    useEffect(() => {
    if (res && res?.MainCarousel && res?.MainCarousel?.length > 0) {
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'350px',
            maxHeight:{xs:'380px',sm:'80vh'},
            height : {xs:'100%',sm:'500px',md:'600px'},
             
            margin: '0em auto',
            display: {
                xs: 'flex'
            },
            // mt:20,
            mb:2,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                        onClick={() => router.push('/collection/products')}
                    className='ztop pointer ' key={item.img}>
                        <Box
                            sx={{
         
                        
                                height: '100%',
                            width:'100%'
                        }}>
    
                            <img
            
                                className={`img pointer  
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3