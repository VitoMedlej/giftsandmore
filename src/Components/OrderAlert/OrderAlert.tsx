import { Box, IconButton, Paper, Typography } from '@mui/material';
import error from 'next/error';
import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import useSWR from 'swr'
 
function Profile() {
    const [orderState,setOrderState] = useState<any>(null)
    const [open,setOpen] = useState(false)
    const deleteOrders = async () => {
      try {

        const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/delete-orders`);
        const res = await req.json();
        console.log('res: ', res);
        if (res?.success) {
          setOrderState(null)
          setOpen(false)
          return
        }
      }
      catch(err){
        console.log('err from order deletion: ', err);

      }
    }
    const fetcher = async () => {
        const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/new-order-checker`);
        const res = await req.json();
        if (res && res?.success) {
          setOrderState(res?.requestedOrder)
          setOpen(true)
          return res
        }
        setOrderState(null)
        setOpen(false)

        return null
      }
    const { data, error, isLoading } = useSWR('/api/user', fetcher,{refreshInterval:10000})
    console.log('isLoading: ', isLoading);
    console.log('error: ', error);
    console.log('data: ', data !== null);
 

    if (orderState && data) {

      // setOrderState(data?.requestedOrder)
      console.log('Success! New order at:', data?.requestedOrder?.orderedAtTime);
      
      // const orderedAtTime = new Date(data?.requestedOrder?.orderedAtTime).getTime();
      // const currentTime = new Date().getTime();
      // const timeDifferenceMs = orderedAtTime - currentTime;
  
      // const fifteenSecondsInMs = 15000; // 15 seconds in milliseconds
  
      // if (timeDifferenceMs > 0 && timeDifferenceMs <= fifteenSecondsInMs) {
        setTimeout(() => {
          console.log('15 seconds have passed. Sending delete request...');
          // Send a delete request to api/delete-orders here
          if (orderState) {

            deleteOrders()
        // setOpen(false)

          }
        }, 15000);
      // }
  
      return   (
        <Box className='flex col center flex align-center' sx={{position:'fixed',zIndex:4124,bottom:'6%',left:'2%'}}>

        
        <Box>
        

       <Paper  className=' row' sx={{boxShadow:'1px 1px 3px #0404046e',mb:1,px:1,py:2,maxWidth:'250px',display:open && orderState || open && data  ? 'flex' : 'null'}}  >
      <Box>
        <Typography fontSize='.85em' fontWeight='500' sx={{color:'#b400ff'}} component='p'>
          {orderState?.order?.info?.firstName ? orderState?.order?.info?.firstName : 'A User'} { orderState?.order?.info?.city && `from ${orderState?.order?.info?.city} `} has ordered {orderState?.order?.products?.length > 0  && orderState?.order?.products[0]?.title ? `${orderState?.order?.products[0]?.title}` : 'An New Item'}!
        </Typography>
      </Box>
      <IconButton onClick={()=>setOpen(false)} className=' flex' sx={{height:'30px',alignItems:'end',justifyContent:'flex-end`'}}>
          <GrFormClose color='red'/>
      </IconButton>
  </Paper>
  </Box>
  </Box>
  
  )

    } else {
      return '';
    }
}
export default Profile