"use client";
import * as React from 'react';
import {MdExpandMore, MdFastfood} from 'react-icons/md'
import { Box , AccordionDetails , AccordionSummary , Accordion ,Typography, ListItem, ListItemButton, ListItemIcon, ListItemText, List, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import Btn from '../Btn/Btn';
import { useLangContext } from '@/context/Contexts';
import useLanguage from '@/Hooks/useLanguage';




export const categories = [
  'Budget Binders',
  'Passport Holder',
  'Self Defense',
  'Dual Glasses and Lense Case',
  'Self-Care',
  'Bracelets','Sale'
];
export const multilangCategories = [
  {en:'Budget Binders',ar:'روابط الميزانية'},
  {en:'Passport Holder',ar:'حامل جواز السفر'},
  {en:'Self Defense',ar:'دفاع عن النفس'},
  {en:'Dual Glasses and Lense Case',ar:"نظارات مزدوجة وحقيبة عدسة"},
  {en:'Self-Care',ar:'رعاية ذاتية'},
  {en:'Bracelets',ar:`أساور`}
  
  ,{en:'Sale',ar:'العروضات'}
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
  const {lang, setLang} = useLangContext();
  const {text} = useLanguage()

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
                    <Typography sx={{
              textAlign:text('left','right'),
                      
                      fontWeight:600}}> {text('All Categories','جميع الفئات')}</Typography>
              </ListItemText>
                    <Divider></Divider>
            </ListItemButton>
          </ListItem>
{multilangCategories.map(category=>{
  
      return     <ListItem 
      key={category.en}
      onClick={()=>{
        toggleDrawer(false)
        router.push(`/${encodeURIComponent(category.en)}/products`)
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
            <Typography sx={{
              textAlign:text('left','right'),
              fontWeight:600}}>{text(category.en,category.ar)}</Typography>
      </ListItemText>
</ListItemButton>

      </ListItem>   
      
      })}
            <Divider></Divider>

<Btn
onClick={()=>setLang(lang === 'en' ? 'ar' :  'en')}

sx={{border:'none',width:'100%',color:'blue',fontSize:'.8em'}} v2>
                            {lang  === 'en'? 'English' : 'Arabic'}
                        </Btn>
            <Divider></Divider>
                     
    </Box>
  );
}
