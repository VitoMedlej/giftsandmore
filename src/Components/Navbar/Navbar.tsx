"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import {CiShoppingCart} from 'react-icons/ci
import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
import {useRouter} from 'next/navigation';
import {IoBagOutline ,IoMenuOutline} from 'react-icons/io5'
import {IoIosSearch  } from 'react-icons/io'
import {HiOutlineUser} from 'react-icons/hi'

import { useCartContext, useDrawerContext, useLangContext } from '@/context/Contexts';
import NavButtom from './NavButtom';
import Btn from '../Btn/Btn';




export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    // const [localCart,
    //     setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    // useEffect(() => {
    //     const cart : any = []
    //     // const cart = loadState('g41i2f0ts') || []
    //     if (cart) {

    //         setLocalCart(cart)
    //     }
    // }, [cartOpen])


    return ( <> <Box
    className='center auto  bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',

        background:'white',
        border: 'none',
        position : 'relative !important',
        flexGrow: 1
    }}>


        <AppBar
    className='center relative  flex'

            sx={{


                background:'white',
            // maxWidth: 'lg',
            position:'relative',
            boxShadow:'1px 1px 3px #00000017',
            margin: '0 auto',
        }}>
            <Toolbar
    className='center  flex w100  auto'

                sx={{
                    
                    // border : `1px solid #00000012`,
                background:'white',
            boxShadow:'1px 1px 3px #00000017',
                    width:'100%',
                    justifyCotntent:'space-between !important',
                    maxWidth:'xl',
            position:'relative',

                px:'0 !important',
                flexWrap: 'wrap'
            }}> 
                

               
            

               
         

    {/* <NavButtom/> */}
    <IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin:0,
                            color: 'black',
                         
                        }}>
                            <IoMenuOutline color='black'/>
                  

                        </IconButton> 
    <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <IoIosSearch color='black'/>
                     
                        </IconButton>
                <Box
                    sx={{
                    px:1,
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                 
                }}>
                           <Link className='flex center auto   align-center ' style={{ justifyContent:'flex-start !important'}}  href='/' color='inherit'>

<Box
    sx={{
        
    mx: {
        sm: '1em'
    },
   
    width:{xs:'90px',sm: '100px'}
}}>
    <img
        className='img'
        src={`https://ucarecdn.com/01ea6d0a-fdbf-4a2f-b647-e76b2d700e32/365014401_1944248375937735_7655171259538237739_n.jpg`}
        alt="gifts.and.more_lb Lebanon logo"/>
</Box>
</Link>

                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
                  

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                                <IoBagOutline color='black'/>
                       
                            </IconButton>

                            <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                                <HiOutlineUser color='black'/>
                       
                            </IconButton>


                     

                    
                    </Box>

                </Box>
          
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
             
            </Toolbar>
        </AppBar>
    </Box> 

    {/* < Divider sx={{color : '#00000017'}} /> */}
     </>
    
    );
}