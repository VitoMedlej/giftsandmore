import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export  async function GET(req: NextRequest, res: NextApiResponse) {
  // const order = req?.body.get('order')
  // const {order} = await req.json()
  // console.log('order: ', order);
  
  if (req.method === 'GET') {
    
    // Process a GET request
       const deletedOrders = await client.db("GIFTS").collection("NewOrder").findOneAndDelete({})
        console.log('deletedOrders: ', deletedOrders);
       if (deletedOrders?.ok) {         
        // if (orders) {         
         return NextResponse.json({success:true});
        }
return NextResponse.json({success:false});

}
return NextResponse.json({success:false});

}