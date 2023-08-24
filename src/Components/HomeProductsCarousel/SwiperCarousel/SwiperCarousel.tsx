"use client";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Autoplay, Pagination} from "swiper";
import 'swiper/css';
import {Box} from '@mui/material';
import ProductCard from '@/Components/ProductCard/ProductCard';
import {IProduct} from '@/Types/Types';

const SwiperCarousel = ({data, delay} : {
    data: IProduct[],
    delay?: number
}) => {

    return (
        <Box
            sx={{
            py: {
                xs: '.5em',
                sm: '2em'
            },
            width: '100%',
            maxWidth: 'lg',
            margin: '0em auto',
            display: {
                xs: 'flex'
            },
            height: '100%'
        }}>
  <Swiper
            pagination={{
                clickable: true,
              }}
             
              autoplay={{
                delay:  delay || 1000,
                disableOnInteraction: true,
              }}
              navigation={false}
            spaceBetween={10}
            slidesPerView={1}
            slidesPerGroup={1}
            modules={[FreeMode,Autoplay, Pagination]}
            breakpoints={{
                200 : {
                    slidesPerView:1,
                },
                540: {
                    slidesPerView: 2,
                  },
                  
                  1024: {
                    slidesPerView: 3,
                  },
                  1640: {
                    slidesPerView: 3,
                  },
                
               
        }}
        
        >

                {data && data.length > 0 && data.map((item : any) => {
                    if (!item._id) 
                        return
                    return <SwiperSlide
                        style={{
                        marginRight: '0 !important'
                    }}
                        key={item._id}>
                        <ProductCard
                            height={'400px'}
                            width='100%'
                            title={item.title}
                            images={item.images}
                            price={item.price}
                            _id={item._id}
                            category={item.category}/>
                    </SwiperSlide>
                  
                })
}

            </Swiper>
        </Box>

    );
};

export default SwiperCarousel