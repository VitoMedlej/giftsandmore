"use client";
import * as React from 'react';
import {MdExpandMore, MdFastfood} from 'react-icons/md'
import { Box , AccordionDetails , AccordionSummary , Accordion ,Typography, ListItem, ListItemButton, ListItemIcon, ListItemText, List, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';




export const categories = [
  "Gifts",
  "Travel",
  "Fashion",
  "Tech",
  "Home",
  "Jewelry",
  "Beauty",
  "Kids",
];
export const types = [
  'All',

  // 'Shoes',
  // 'Bags',
  // 'T-Shirts',
  // 'Dresses',
  // 'Pants',
  // 'Jackets',
  // 'Accessories'
];
export default function BasicAccordion({toggleDrawer} : any) {
  const router = useRouter();

  return (
    <Box sx={{zIndex:241241241}}>
       <ListItem 
          onClick={()=>{
            toggleDrawer(false)
            router.push(`/collection/products`)
           }}
           disablePadding>
            <ListItemButton sx={{py:1 ,  fontWeight:'600 !important',}}>
           
              <ListItemText
              sx={{
                color:'black',
                fontWeight:'600 !important',
                textTransform: 'capitalize'
              }}
            >
                    <Typography sx={{fontWeight:600}}>All Categories</Typography>
              </ListItemText>
                    <Divider></Divider>
            </ListItemButton>
          </ListItem>
{categories.map(category=>{
  
      return <Accordion sx={{minWidth:'280px', width:{xs:'100%'} }}  key={category}>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:600}}>{category}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{py:0,px:0}}>
        <List>

     {types.map(type=>{

    return    <ListItem key={type}
          onClick={()=>{router.push(`/${category.toLocaleLowerCase() || 'collection'}/products?type=${type.toLocaleLowerCase()}`);toggleDrawer(false)}}
           disablePadding>
            <ListItemButton sx={{py:0}}>
           
              <ListItemText
              sx={{
                color:'black',
                textTransform: 'capitalize'
              }}
              primary={`${type}`} />
            </ListItemButton>
          </ListItem> })}
        </List>

        </AccordionDetails>
      </Accordion>})}

    </Box>
  );
}
