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




const PreLoader = ({data, images}:any) => {
  const {text} = useLanguage()
  const router= useRouter();
  const cates = [
    
  {img:'https://ucarecdn.com/9377700c-4d14-409d-b80c-6ed606641cb0/327136091_749988793406928_6850892064082220408_n.jpg',category:text('Sale','العروضات')} ,
  {img:'https://i.etsystatic.com/27838430/r/il/01b9c9/2920342831/il_1140xN.2920342831_f5so.jpg',category: text('Budget Binders','مجلدات الميزانية') } ,
  {img:'https://th.bing.com/th/id/OIP.x11jysR_VALww3yiv1l3NgHaHa?pid=ImgDet&rs=1',category:  text('Bracelets','اساور')} ,
  {img:'https://ucarecdn.com/9cabb206-5ce7-4291-b75a-a74a18d675c1/336969431_920254869121358_7359947221995293304_n.jpg',category:  text('Passport Holder','حامل جواز السفر')}
  ]
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

            onClick={()=>router.push(`${i?.category.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
            key={i?.img} className='cursor relative'
             sx={{borderRadius:'50%',height:{xs:'300px',sm:'350px'},
             my:2,width:{xs:'48%',sm:'32%',md:'22%'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'2'}} className="img" />
                    <Box sx={{width:'100%',height:'100%',position:'absolute',top:0,right:0,background:'black',opacity:.2}}>

                    </Box>
                    <Typography sx={{position:'absolute', fontWeight:'500',color:'white'
                    ,textShadow:'1px 1px 3px #0000005e',bottom:'4%',fontSize:'1.35em',textAlign: 'center',px:1}}>
             {i?.category}
            </Typography>
            </Box>

        })}
            </Box>

     </Box>

      <Box/>
      <Grid container sx={{flexDirection:text('row','row-reverse'), mx:1,my:5}} >
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
                  width:{xs:'100%',sm:text('90%','100%'),md:text('85%','100%')},
                  display:'flex',
                  justifyContent: text('start','end'),
                  textAlign: text('start','end'),
                fontSize: {
                    xs: '.942em',
                    sm: '1em',
                    md:'1em'
                },
                flex:1,
                fontWeight: '500'
            }}>
              

              {text(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, magni modi! Nobis praesentium, a reiciendis possimus
               explicabo voluptatem ipsa ad? Maxime non pariatur praesentium obcaecati.`,`لوريم إيبسوم دولور الجلوس على نطاق النخبة. برايسنتيوم ، ماجني مودي! نوبيس برايسنتيوم ، ريسينديس بوسيموس
               explicabo voluptatem IPSA الإعلان؟ Maxime non pariatur praesentium obcaecati.`)}

            </Typography>
            <Btn className='bg' sx={{
                  justifyContent: text('start','end'),
              
              border:'none',':hover':{border:'none',color:'white'},borderRadius:2000,my:2}}>
              {text('Shop Now','تسوق الآن')}
            </Btn>
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