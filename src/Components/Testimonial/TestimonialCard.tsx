
"use client"

import {Box, Rating, Typography} from '@mui/material'
import React from 'react'

const TestimonialCard = ({title,reviewer,description}:{title:string,reviewer:string,description:string}) => {
    return (
        <Box
        className='auto flex center col '
            sx={{
                boxShadow:'1px 1px 3px #00000014',
                px:2,
                maxWidth:'500px',
                height:'500px',
                borderBottom: '1px solid white'
        }}>

            <Box className="flex">
            


            </Box>
<Box sx={{width:'35px',pt:4}}>
<img src="https://th.bing.com/th/id/OIP.jNUjDa5F4EZjgnC-U_EzmgHaFg?pid=ImgDet&rs=1" alt="Quotes Icon" className="img contain" />

</Box>

            <Typography
            // className='clr'
                sx={{
                    // color:'#f8f8f8',
                fontWeight: 500,
                    maxWidth:'500px',
                pt: 1.25,
                fontSize: 16
            }}
                component={'p'}>{description}</Typography>
                 <Rating sx={{mt:3,mb:.5}} readOnly value={5}></Rating>
                 <Typography
            className='clr'
                sx={{
                    // color:'#f8f8f8',
                    fontStyle:'italic',
                fontWeight: 400,
                    maxWidth:'500px',
                pb:8,
                fontSize: 15
            }}
                component={'p'}>-{reviewer}</Typography>


        </Box>
    )
}

export default TestimonialCard