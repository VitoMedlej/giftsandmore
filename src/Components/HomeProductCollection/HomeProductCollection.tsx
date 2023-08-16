"use client"
import { Box, Divider, Link, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import useLanguage from '@/Hooks/useLanguage'

const HomeProductCollection = ({products} : {products:IProduct[] | never[]}) => {
  const {text} = useLanguage()

  return (
    <Box sx={{my:4}} className='center auto'>
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
              {text('Shop Our Latest Products',`تسوق أحدث منتجاتنا`)}
            </Typography>
      
              <Box sx={{mb:2}} className='flex wrap gap1 justify-center'>
                  {products && products?.length > 0 && products.map(i=>{

                      return <ProductCard key={i?._id} title={i?.title} price={i?.price} _id={i?._id} 
                       images={i?.images?.length > 0 && i?.images[0]?.length > 3 ? i?.images : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90cK_Js0H-conZ_T6tHjPHtCXP8e-e7MHt69YkHWej5n90FlRvLFUMC2CmRt6UPy9dYc&usqp=CAU']}
                       category={i?.category}/>
                  })}
              </Box>
            </Box>
  )
}

export default HomeProductCollection