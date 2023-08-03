"use client"
import React from 'react'
import { Box,  Container, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
import { IProduct } from '@/Types/Types'


const cates = [{img:'https://ucarecdn.com/ae56917f-a7a6-4ec0-b967-775b949b6877/shoescate.JPG',category:'men',type:'shoes'},
{img:'https://ucarecdn.com/09462b5b-2130-477b-b4dd-16802e046b90/womencate.JPG',category:'women',type:'shoes'},
{img:'https://ucarecdn.com/e6703908-03cc-4bc0-bd35-afa9a94d29a0/Capture.JPG',category:'collection'} ,
]

const PreLoader = ({data}:any) => {
    const router= useRouter();
  return (
    <Box >
      <MainCarousel/>

    <Container disableGutters className='wrap auto flex' sx={{pt:10,px:{sm:1},maxWidth:'xl',display:'flex'}}>
  
 

     <Box
                className=' text-center auto center box'
     
     sx={{mx:1,width:'100%'}}>

        
         <Typography
                className='sectionTitle text-center auto center box'
                sx={{
                  pb:'.5em',
                  pt:9,
                  display:'flex',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                flex:1,
                fontWeight: '300'
            }}>
               Explose Categories
            </Typography>
         

            <Box className='wrap  space-evenly' sx={{width:'100%',my:3,display:{xs:'flex'}}}>

        {cates.map(i=>{
            return <Box

            onClick={()=>router.push(`${i?.category.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
            key={i?.img} className='cursor'
             sx={{borderRadius:'50%',height:{xs:'300px',sm:'450px'},
             my:2,width:{xs:'48%',sm:'300px',md:'32%'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'2'}} className="img" />
                    {/* <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
             {i?.category}
            </Typography> */}
            </Box>

        })}
            </Box>

     </Box>

      <Box/>
        <HomeProductsCarousel Collectiontitle={"Featured Products"} delay={3000} data={data?.featuredProducts || null}/>

        <HomeProductCollection products={data?.products || null }/>

      
        

        
        {/* <Perks/> */}

    </Container>
        {/* <ContactSection/> */}
  </Box>
  )
}

export default PreLoader