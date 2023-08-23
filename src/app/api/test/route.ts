



import client from '@/database/mongodb';
import type {  NextApiResponse}
from 'next';
import {NextResponse ,  } from 'next/server';
import { NextRequest} from 'next/server';
// var geoip = require('geoip-country');
const requestIp = require('request-ip');


export async function GET(req :NextRequest , res : NextApiResponse) {
    // try{
    // const url = req.nextUrl
    // const { searchParams } = new URL(req.nextUrl);
    // const page = searchParams.get('page')
    // let category=  searchParams.get('category') || null

    // console.log('page: ', page);
    // return NextResponse.json({success: false});
    
        // const { page,category } = req;
        // let category=  searchParams.get('category') || null
        // let page=  searchParams.get('page') || 0
    // }
    // catch(err){
    //     console.log('err: ', err);

    // }
    try {
            const requestHeaders = new Headers(req.headers);
              console.log('requestHeaders: ', requestHeaders);
              const ip = req.ip || "";
              console.log('req: ', req);
              console.log('ip: ', ip);
              
            // const ip = requestIp.getClientIp(req)
            // console.log('requestIp: ', requestIp);
            // console.log('ipsssssss: ', ip);
          
            // const requestHeaders = new Headers(req.headers);
  
  const forwarded = requestHeaders.get('x-forwarded-for');
  console.log('forwarded: ', forwarded);

      
    return NextResponse.json({
        success: true,
        data: {
            forwarded:JSON.stringify(forwarded),
            ip : JSON.stringify(ip),
            requestHeaders : JSON.stringify(requestHeaders)
        }
    });
}
catch (e) {
    console.log('e sort function: ', e);
    return NextResponse.json({
        success: false,
        data: {
            products : null
           
        }
    });
}
 

}