"use client"

import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import useLanguage from '@/Hooks/useLanguage';
import { Autoplay } from 'swiper';
// import { Autoplay, Pagination } from 'swiper/modules';
// import {FreeMode, Autoplay, Pagination} from "swiper";



// const Clients = [
//     {id:1,
//         description:``,
//         name:'Zekra Advertising Specialist',img:'https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png'},
//         {id:2,
//             description:``,
//             name:'',img:'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'},
//         {id:3,
//             description:``,
//             name:`Powerhouse’s Owner `,img:'https://ucarecdn.com/3b40bedc-0aa3-4247-a196-fd05de4d4f87/003011.jpg'}

// ]


const Testimonial = () => {
  const {text} = useLanguage()

const tests =[
    {
        title: text("Fantastic Shopping Experience!", "تجربة تسوق رائعة!"),
        reviewer: text("(Layla, Gift Enthusiast)", "(ليلى، عاشقة الهدايا)"),
        description: text(
            "I stumbled upon Gifts and More while looking for unique presents. The variety of items they offer is astounding. From traditional Lebanese crafts to modern trinkets, they have it all. The website's bilingual support is a game-changer for someone like me who prefers Arabic. It's evident that they care about their customers' preferences. Thumbs up!",
            "عثرت عن طريق الصدفة على موقع هدايا وأكثر أثناء البحث عن هدايا فريدة. تنوع العناصر التي يقدمونها مدهش. من الحرف اللبنانية التقليدية إلى الأشياء العصرية، لديهم كل شيء. دعم الموقع ثنائي اللغة يعد تغييرًا كبيرًا بالنسبة لشخص مثلي الذي يفضل اللغة العربية. من الواضح أنهم يهتمون بتفضيلات عملائهم. إبهامي لأعلى!"
        )
    },
    {
        title: text("Exquisite Gifts and Top-Notch Service!", "هدايا رائعة وخدمة متفوقة!"),
        reviewer: text("(Karim, Occasion Organizer)", "(كريم، منظم المناسبات)"),
        description: text(
            "As an event planner, finding the perfect gifts is a must. Gifts and More exceeded my expectations. The seamless user experience on the website made my selections a breeze. What truly sets them apart is their dedication to quality and their attention to detail. They helped me curate custom gift sets that left a lasting impression on my clients. This shop is now my go-to for all gifting needs.",
            "كمنظم للفعاليات، العثور على الهدايا المثالية أمر ضروري. تجاوزت هدايا وأكثر توقعاتي. تجربة المستخدم السلسة على الموقع جعلت اختياراتي سهلة. ما يميزهم حقًا هو التفاني في الجودة والاهتمام بالتفاصيل. ساعدوني في تجميع مجموعات هدايا مخصصة تركت انطباعًا دائمًا على عملائي. هذا المتجر أصبح وجهتي الأساسية لجميع احتياجات الهدايا."
        )
    },
    {
        title: text("A Blessing for Business Gifting!", "نعمة لهدايا الأعمال!"),
        reviewer: text("(Nadia, Corporate Manager)", "(نادية، مديرة الشركات)"),
        description: text(
            "Managing corporate gifts has never been easier, thanks to Gifts and More. I represent a company that frequently sends gifts to clients and partners. The range of choices available on the website is outstanding. Even with a sizable order, the website handled it without a hitch. The Gifts and More team ensured our logo looked perfect on the items. Their professionalism and efficiency saved us valuable time. Highly recommended!",
            "إدارة الهدايا الشركية لم تكن أبدًا أسهل، بفضل هدايا وأكثر. أنا أمثل شركة ترسل هدايا بشكل متكرر إلى العملاء والشركاء. تشكيلة الخيارات المتاحة على الموقع مذهلة. حتى مع طلب كبير، تم التعامل مع الموقع ميسر. فريق هدايا وأكثر ضمنوا أن شعارنا يبدو مثاليًا على العناصر. احترافيتهم وكفاءتهم أوفرت لنا وقتًا قيمًا. نوصي بهم بشدة!"
        )
    }
];
    
    
  return (
    <Box className=' flex col ' sx={{width:'100%',height:'100%'}}>
 <Box className='flex col'  sx={{flex:1,width:'100%',pt:'6em'}}>
 <Typography
                className='sectionTitle clr text-center auto center box'
                sx={{
                  pb:'.5em',
                  pt:9,
                  width:'100%',
                  display:'flex',
                fontSize: {
                    xs: '1.42em',
                    sm: '1.74em',
                    md:'2em'
                },
                flex:1,
                fontWeight: '500'
            }}>
              {text('Real Reviews From Customers',`تقييمات حقيقية من العملاء`)}
            </Typography>
            </Box>
       <Box
            sx={{
            
         
            margin: '0em auto',
            width: '100%',
            maxWidth: 'lg',
            mb:'6em',
            display: {
                xs: 'flex'
            },
            // height: '100%'
        }}>

            <Swiper
                pagination={{
                clickable: true
            }}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
            
                // navigation={true}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={
 {// when window width is >= 320px
 320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  }}

                }
                modules={[ Autoplay]}
              >

                {tests.map((item ) => {
                    if (!item.title) 
                        return
                    return <SwiperSlide
                        style={{
                        padding:'2em 0',
                        marginRight: '0 !important'
                    }}
                        key={item.title}>
                         <TestimonialCard title={item.title} reviewer={item.reviewer} description={item.description}/>

                    </SwiperSlide>
                    // return <SwiperSlide className='swiper-wrapper1'
                    // style={{width:'100%',height:'100%'}} key={item._id}>     {/* <HouseCard
                    //   img={property.images[0] || property.images[1]}         width='95%'
                    // id={property.id}         isFeatured={isFeatured !== undefined ? isFeatured :
                    // true}         propertySize={property.propertySize}
                    // type={property.type}         baths={property.bathrooms}
                    // rooms={property.rooms}         currency={property.currency}
                    // price={property.price}         title={property.title}
                    // location={property.location}/> */}          <ProductCard
                    // handleQuickView={handleQuickView}          title={item.title}
                    // images={item.images}          price={item.price}          _id={item._id}
                    //     category={item.category}          /> </SwiperSlide>

                })
}

            </Swiper>
        </Box>
    </Box>
  )
}

export default Testimonial