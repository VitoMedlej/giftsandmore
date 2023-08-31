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
    console.log('Called at time: ',new Date()?.toISOString());
    // if (!order) return NextResponse.json({success:false})
      //  const requestedOrder = await client.db("GIFTS").collection("Orders").findOne({});
       const requestedOrder = await client.db("GIFTS").collection("NewOrder").findOne({});
       console.log('requestedOrder: ', requestedOrder);
    // const orders : any= [];
    // await requestedOrder.forEach((doc : any) => {
      // console.log('doc: ', doc);
      
      // orders.push(doc)
      
    // })
    // console.log('orders: ', orders?.length);
       if (requestedOrder) {         
        // if (orders) {         
         return NextResponse.json({requestedOrder,success:true});
        }
return NextResponse.json({success:false});

}
return NextResponse.json({success:false});

}