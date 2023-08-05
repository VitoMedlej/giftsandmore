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
// import Perks from './Perks/Perks'
// import { IProduct } from '@/Types/Types'


const cates = [
  
{img:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://planouter.com/wp-content/uploads/elementor/thumbs/IMG-5355-2-1-scaled-qabsxj6l795rv87tkdnvhqxqilh42lhpy15k8uuffg.jpg',category:'collection'} ,
{img:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://planouter.com/wp-content/uploads/elementor/thumbs/IMG-5355-2-1-scaled-qabsxj6l795rv87tkdnvhqxqilh42lhpy15k8uuffg.jpg',category:'collection'} ,
{img:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://planouter.com/wp-content/uploads/elementor/thumbs/IMG-5355-2-1-scaled-qabsxj6l795rv87tkdnvhqxqilh42lhpy15k8uuffg.jpg',category:'collection'} ,
{img:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://planouter.com/wp-content/uploads/elementor/thumbs/IMG-5355-2-1-scaled-qabsxj6l795rv87tkdnvhqxqilh42lhpy15k8uuffg.jpg',category:'collection'} ,
]

const PreLoader = ({data, images}:any) => {
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
              View Different Collections
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
      <Grid container sx={{mx:1,my:5}} >
          <Grid xs={12} sx={{py:4}} sm={6}>
                
         <Typography
                className='sectionTitle clr  auto  box'
                sx={{
                  pb:1,
                  pt:{xs:1,sm:4,md:5},
                  display:'flex',
                fontSize: {
                    xs: '2.142em',
                    sm: '2.474em',
                    md:'3.5em'
                },
                flex:1,
                fontWeight: '500'
            }}>
              View Different Collections
            </Typography>
              
         <Typography
                className='sectionTitle    center box'
                sx={{
                  width:{xs:'100%',sm:'90%',md:'85%'},
                  display:'flex',
                fontSize: {
                    xs: '.942em',
                    sm: '1em',
                    md:'1em'
                },
                flex:1,
                fontWeight: '500'
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, magni modi! Nobis praesentium, a reiciendis possimus
               explicabo voluptatem ipsa ad? Maxime non pariatur praesentium obcaecati.
            </Typography>
            <Btn className='bg' sx={{border:'none',':hover':{border:'none',color:'white'},borderRadius:2000,my:2}}>
              Shop Now
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