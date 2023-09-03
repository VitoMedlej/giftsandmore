"use client";
import {useContext, useState} from 'react';
import {Drawer,List,Divider,
  Box, Typography} from '@mui/material';
// import {IoShirtOutline,IoShirtSharp} from 'react-icons/io5';
import { IconButton } from '@mui/material';

// import { useRouter } from 'next/navigation';
// import {MdFastfood} from 'react-icons/md';

import { DrawerContext, useRateContext } from '@/context/Contexts';
import {GrFormClose} from 'react-icons/gr'
// import SMicons from '../SMicons/SMicons';
// import { categories } from '../Navbar/Navbar';
import SideAccordion from './SideAccordion';
import Btn from '../Btn/Btn';
import { countriesList } from '../CountryModal/CountrySelect';


export default function TemporaryDrawer({modalOpen,setModalOpen}:{modalOpen:boolean ,setModalOpen:any}) {
 
  const {open, setOpen} = useContext(DrawerContext);
  // const router = useRouter();
  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };
    const {rate,setRate} = useRateContext()

    const findExchangeRate = (searchRate : number) => {
      const foundCountry = countriesList.find(
        (country) => parseFloat(`${country?.exchangeRate}`) === searchRate
      );
  
      return foundCountry ? foundCountry : {currency:1, exchangeRate:1,name : 'USA'};
    };


  const Lista = () => (
    <Box
      sx={{ minWidth:'250px', width:  {xs:'100%',sm:'300px',md:'400px'},py:1 }}
      role="presentation"
      // onClick={toggleDrawer( false)}
      // onKeyDown={toggleDrawer( false)}
    >
      <Box className='flex justify-between items-center '
      sx={{margin:' 0 .5em'
      // ,borderBottom:'1px solid #00000040',
         , justifyContent: 'flex-end'}}
      
      >
        <Box>
          <Typography sx={{fontWeight:300}}>
            Side Bar
          </Typography>
        </Box>
    <Divider light></Divider>

              <IconButton 
        
        onClick={toggleDrawer(false)}
        >
                        <GrFormClose
                                color='red'
                                />
                        </IconButton>
                     

                                </Box>
      {/* <List>
      <ListItem
          onClick={()=>router.push(`/collection/products`)}
           disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdFastfood />
              </ListItemIcon>
              <ListItemText
              sx={{
                color:'black',
                textTransform: 'capitalize'
              }}
              primary={'All Categories'} />
            </ListItemButton>
          </ListItem>
       {categories.map((text, index) => {
          if (!text) return;
          return <ListItem
          onClick={()=>router.push(`/${text.replace(/ /g, '-')}/products`)}
          key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <IoShirtOutline /> : <IoShirtSharp />}
              </ListItemIcon>
              <ListItemText
              sx={{
                color:'black',

                textTransform: 'capitalize'
              }}
              primary={text} />
            </ListItemButton>
          </ListItem>
        })
        
        }
      </List>
      <SMicons/> */}

      <SideAccordion  toggleDrawer={setOpen}/>
      <Btn 
      // onClick={()=>setModalOpen(!modalOpen)}
      sx={{border:'none',width:'100%',color:'blue',fontSize:'.8em'}} v2>
          Change Currency - {
    findExchangeRate(rate || 1)?.currency 
          }
                          </Btn>
      <Divider />
      
    </Box>
  );

  return (
    <div>

          <Drawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
          >

  <Lista/>

      
      

          </Drawer>
    </div>
  );
}