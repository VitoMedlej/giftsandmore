"use client"
import React from 'react'
import { Box,  Container, Grid, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Btn from './Btn/Btn'
import Perks from './ContactSection/ContactSection'
import ContactSection from './ContactSection/ContactSection'
import useLanguage from '@/Hooks/useLanguage'
// import Perks from './Perks/Perks'
// import { IProduct } from '@/Types/Types'


const cates = [
  {
    img: 'https://ucarecdn.com/9377700c-4d14-409d-b80c-6ed606641cb0/327136091_749988793406928_6850892064082220408_n.jpg',
    category: {
      en: 'Sale',
      ar: 'العروضات'
    }
  },
  {
    img: 'https://i.etsystatic.com/27838430/r/il/01b9c9/2920342831/il_1140xN.2920342831_f5so.jpg',
    category: {
      en: 'Budget Binders',
      ar: 'مجلدات الميزانية'
    }
  },
  {
    img: 'https://th.bing.com/th/id/OIP.x11jysR_VALww3yiv1l3NgHaHa?pid=ImgDet&rs=1',
    category: {
      en: 'Bracelets',
      ar: 'اساور'
    }
  },
  {
    img: 'https://ucarecdn.com/9cabb206-5ce7-4291-b75a-a74a18d675c1/336969431_920254869121358_7359947221995293304_n.jpg',
    category: {
      en: 'Passport Holder',
      ar: 'حامل جواز السفر'
    }
  }
];

const PreLoader = ({data, images}:any) => {
  const {text} = useLanguage()
  const router= useRouter();

  return (
    <Box >
      <MainCarousel images={images}/>

    <Container disableGutters className='wrap auto flex' sx={{pt:10,px:{sm:1},maxWidth:'xl',display:'flex'}}>
  
 

     <Box
                className=' text-center auto center box'
     
     sx={{mx:1,width:'100%'}}>

        
         <Typography
                className='sectionTitle clr text-center auto center box'
                sx={{
                  pb:'.5em',
                  pt:9,
                  display:'flex',
                fontSize: {
                    xs: '1.42em',
                    sm: '1.74em',
                    md:'2em'
                },
                flex:1,
                fontWeight: '500'
            }}>
              
              {text('View Different Collections','عرض مجموعات مختلفة')}
            </Typography>
         

            <Box className='wrap  space-evenly' sx={{width:'100%',my:3,display:{xs:'flex'}}}>

        {cates.map(i=>{
            return <Box

            onClick={()=>router.push(`${i?.category.en.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
            key={i?.img} className='cursor relative'
             sx={{borderRadius:'50%',height:{xs:'300px',sm:'350px'},
             my:2,width:{xs:'48%',sm:'32%',md:'22%'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'2'}} className="img" />
                    <Box sx={{width:'100%',height:'100%',position:'absolute',top:0,right:0,background:'black',opacity:.2}}>

                    </Box>
                    <Typography sx={{position:'absolute', fontWeight:'500',color:'white'
                    ,textShadow:'1px 1px 3px #0000005e',bottom:'4%',fontSize:'1.35em',textAlign: 'center',px:1}}>
             {text(i?.category.en,i?.category.ar)}
            </Typography>
            </Box>

        })}
            </Box>

     </Box>

      <Box/>
      <Grid container sx={{flexDirection:text('row','row-reverse'), mx:1,my:8}} >
          <Grid xs={12} sx={{py:4}} sm={6}>
                
         <Typography
                className='sectionTitle clr  auto  box'
                sx={{
                  pb:1,
                  pt:{xs:1,sm:4,md:5},
                  justifyContent: text('start','end'),

                  display:'flex',
                fontSize: {
                    xs: '2.142em',
                    sm: '2.474em',
                    md:'3.5em'
                },
                flex:1,
                fontWeight: '500'
            }}>
                          {text('View Different Collections','عرض مجموعات مختلفة')}

            </Typography>
              
         <Typography
                className='sectionTitle     box'
                sx={{
                  width:{xs:'95%',sm:text('90%','100%'),md:text('85%','100%')},
                  display:'flex',
                  justifyContent: text('start','end'),
                  textAlign: text('start','end'),
                fontSize: {
                    xs: '.942em',
                    sm: '1em',
                    md:'1em'
                },





                px:1,

                flex:1,
                fontWeight: '500'
            }}>
              

              {text(`Gifts and More LB" is your haven for thoughtful gifts that transcend the ordinary. From heartfelt tokens for loved ones to unique finds that mark special moments, our shop offers a diverse selection catering to every taste. Step in and discover presents that bring joy and stories to life. Whether you're seeking a specific occasion's gift or satisfying your curiosity, Gifts and More LB is your go-to for meaningful, unforgettable surprises.`,
             `Gifts and More LB" هو ملاذك للهدايا الفاخرة التي تتجاوز المألوف. من الرموز المؤثرة لأحبائك إلى العناصر الفريدة التي تحتفل بلحظات خاصة، يقدم متجرنا تشكيلة متنوعة تلبي كل الأذواق. ادخل واكتشف الهدايا التي تجلب البهجة وتروي قصصًا. سواء كنت تبحث عن هدية لمناسبة معينة أو تشعر بفضولك يتنبض، "Gifts and More LB" هو وجهتك للمفاجآت المعنوية والتي لا تُنسى.` 
             )}

            </Typography>
            <Typography
                className='sectionTitle     box'
                sx={{
                  width:{xs:'95%',sm:text('90%','100%'),md:text('85%','100%')},
                  display:'flex',
                  justifyContent: text('start','end'),
                  textAlign: text('start','end'),
                  pt:4,
                  px:1,
                fontSize: {
                    xs: '.942em',
                    sm: '1em',
                    md:'1em'
                },
                flex:1,
                fontWeight: '500'
            }}>
              

              {text(`Indulge in the art of gift-giving at "Gifts and More LB." Our carefully curated collection reflects our passion for sourcing distinctive products. From handcrafted trinkets to imported treasures, we offer a constantly evolving assortment that embodies creativity. With exceptional service, we're here to help you find that perfect something, making every gifting opportunity a chance to create lasting memories`,
             `استمتع بفن الإهداء في "Gifts and More LB". مجموعتنا المرتبة بعناية تعكس شغفنا في اختيار المنتجات المميزة. من الحلي الحرفية إلى الكنوز المستوردة المختارة بعناية، نقدم تشكيلة متجددة باستمرار تجسد الإبداع. من خلال خدمة استثنائية، نحن هنا لمساعدتك في اكتشاف ذلك الشيء المثالي، مما يجعل كل فرصة للإهداء فرصة لخلق ذكريات دائمة.` 
             )}

            </Typography>
            {/* <Btn className='bg' sx={{
                  justifyContent: text('start','end'),
              
              border:'none',':hover':{border:'none',color:'white'},borderRadius:2000,my:2}}>
              {text('Shop Now','تسوق الآن')}
            </Btn> */}
          </Grid>
          <Grid xs={12}  sm={6}>
              <Box sx={{height:'500px'}}>
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://planouter.com/wp-content/uploads/elementor/thumbs/IMG-5322-1-qabmavxq1ih28yliitx1aohp27koxna6q6ze33c934.jpg" alt="Product Showcase image" className="img" />
              </Box>
          </Grid>
      </Grid>
        {/* <HomeProductsCarousel Collectiontitle={"Featured Products"} delay={3000} data={data?.featuredProducts || null}/> */}

        <HomeProductCollection products={data?.products || null }/>

      
        

        
        {/* <Perks/> */}

    </Container>
        <ContactSection/>
  </Box>
  )
}

export default PreLoader