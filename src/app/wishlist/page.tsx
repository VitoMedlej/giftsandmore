"use client"
import Btn from '@/Components/Btn/Btn'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'

const Index = () => {
    const [localUser,setLocalUser] = useState<{name?:string,email?:string} | null>(null)
    const router= useRouter()
    const fetchUser = async () => {
            const user = localStorage.getItem('8s01er-0recds')
            if (user) {
                   let parsedUser = JSON.parse(user)
                   if (!parsedUser) {return}
                   setLocalUser(parsedUser)
            }
    }
    const logout = () => {
        localStorage.removeItem('8s01er-0recds')
        localStorage.removeItem('5if16wt1')
        setLocalUser(null)

    }
    useEffect(()=>{
        fetchUser()
    },[])

  return (
    <Box sx={{my:8,mx:2}}>
    {
        localUser && localUser?.email && localUser?.name ? <Grid container >
            <Grid item xs={12} sm={8} md={3} >
                    <Typography sx={{mb:1,fontSize:'1.5em',fontWeight:'600'}}>
                        User Details
                    </Typography>
                    <Box>
                    <strong>User Name:</strong> <span>{localUser?.name}</span>
                    <br/>
                        <strong>Email:</strong> <span>{localUser?.email}</span>
                    <Btn sx={{mt:2}} onClick={()=>logout()}>Logout</Btn>
                    </Box>
            </Grid>
            <Grid xs={12} sm={4} md={8.9}>
                <Box sx={{borderLeft:{sm:'1px solid #00000c21' },width:'100%',height:'1000px'}}> 
                <Typography sx={{textAlign:'center',mb:1,fontSize:'1.5em',fontWeight:'600'}}>
                       Your Wish List
                    </Typography>
                    {
                        false ? <Box>

                        </Box>
                        :
                        <Typography sx={{textAlign:'center',mb:1,fontSize:'.8em',fontWeight:'400'}}>
                        You have not added any products yet.
                     </Typography>
                    }
                </Box>
            </Grid>

        </Grid>
        : 
        <Box sx={{my:8,mx:1}} className='flex center auto col' >
            <Typography sx={{textAlign:'center',fontSize:'1.1em'}}>Please login in order to unlock the wishlist and many more amazing features.</Typography>
            <Btn 
            onClick={()=>router.push('/account/login')}
            sx={{margin:'.75em auto',width:'120px'}}>Login</Btn>
        </Box>

    }
        
    </Box>

  )
}

export default Index