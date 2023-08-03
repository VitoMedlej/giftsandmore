"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
// import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import {BsHandbag} from 'react-icons/bs'
import {GoSearch} from 'react-icons/go'

// import SearchInput from './SearchInput';

// import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext } from '@/context/Contexts';




export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('04128rdrt') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])


    return ( <> <Box
    className='center auto  bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',

        background:'white',
        border: 'none',
        // position : 'fixed',
        flexGrow: 1
    }}>
        <Box className='flex bg white gap1 align-center items-center w100 center' sx={{
                    maxWidth:'xl',
            
            py:.45}} >
            <Typography sx={{fontSize:{xs:'.7em',sm:'.8em'}}} className='center text-center'>
              Delivery All Over Lebanon |  whatsapp📲: +961 03874743
            </Typography>
                   {/* <Typography
                                sx={{
                                
                                px: '.1em',
                                // color: 'black',
                                display : {
                                    xs: 'none',
                                    lg: 'flex'
                                }
                            }}>
                               +{process.env.NEXT_PUBLIC_WA}
                            </Typography> */}
        </Box>
        <AppBar
    className='center relative  flex'

            sx={{


                background:'white',
            // maxWidth: 'lg',
            boxShadow:'1px 1px 3px #00000030',
            margin: '0 auto',
        }}>
            <Toolbar
    className='center  flex w100  auto'

                sx={{
                    
                    // border : `1px solid #00000012`,
                background:'white',
                    maxWidth:'xl',
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
                            <IoIosMenu color='black'/>
                       <Typography sx={{display:{xs:'none',sm:'flex'}, px:.5, fontWeight:200}}> 
                                Menu
                            </Typography>

                        </IconButton>
               
                <Link className='flex center  aling-center items-center ' style={{ flex:1}}  href='/' color='inherit'>

<Box
    sx={{
    mx: {
        sm: '1em'
    },
   
    width:{xs:'90px',sm: '100px'}
}}>
    <img
        className='img'
        src={`https://ucarecdn.com/02525c92-bb29-42fb-a57b-37f66be9e061/363298932_1005526440451332_5413838414448583539_n.jpg`}
        alt="Beyond Luxury Lebanon logo"/>
</Box>
</Link>
                <Box
                    sx={{
                    px:1,
                    flexWrap: 'wrap',
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
 <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <GoSearch color='black'/>
                           <Typography sx={{display:{xs:'none',sm:'flex'}, px:.5, fontWeight:200}}> 
                                Search
                            </Typography>
                        </IconButton>
                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                                <BsHandbag color='black'/>
                           <Typography sx={{display:{xs:'none',sm:'flex'}, px:.5, fontWeight:200}}> 
                                Cart
                            </Typography>
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