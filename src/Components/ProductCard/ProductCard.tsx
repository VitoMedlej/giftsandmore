"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'
const ProductCard = ({
    title,
    price,
    images,
    category,
    _id,
    width,
    height
} : {
    _id: string,
    title: string,
    price: number,
    images: string[],
    category: string,
    width?: string | number
    height?: string | number
}) => {
    const router = useRouter()
    const {addToCart}= useCart()

    return (
        <Box
            className='  trans'
            sx={{
            border : '1px solid #000000a',
            py: 1,
            margin: '0em auto',
            minWidth: {xs:'150px',md:'200px',lg:'250px',xl:'300px'},
            width: width
                ? width
                : {
                    xs: '48%',
                    sm: '32%',
                    md : '22%'
                }
        }}>
            <Box 
            className='cursor'
               onClick={() => router.push(`/product/${_id}`)}
            sx={{
                height: height || {xs:'180px',sm:'300px',md:'350px'}
            }}>
                <img
                    src={images
                    ? images[0]
                    : ''}
                    alt="Prdouct image"
                    className="img contain"/>
            </Box>
            
            <Box
            className='center flex auto  col align-center items-center' 
            sx={{
                px: .95
                
            }}>
                  
               
                <Typography
            className='limited cursor '

                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                    pt:.33,
                    fontSize: {xs:'.99em',sm:'1.195em',md:'1.124em'},
                    fontWeight: '400'
                }}>
                    {title}
                </Typography>
                <Typography
                    sx={{
                    my: .5,
                    fontWeight: '300',
                    fontSize: '1.0em'
                }}>
                    ${price}
                </Typography>
                <Btn
            className='cursor gap1'
                
                     onClick={()=>addToCart(_id,{title,category,img:images[0],_id,price},true)}
                   v2 
                    sx={{
                        width:'100%',
                        fontWeight:300,
                        color:' black',
                        border:'none',
                        py:0,
                        fontSize:'.67em',
                    borderRadius:0,
                  
                 
                }}>
                    Add To Bag
                </Btn>
            </Box>
        </Box>
    )
}

export default ProductCard