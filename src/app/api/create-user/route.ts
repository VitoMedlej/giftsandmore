import client from '@/database/mongodb';
import { ObjectId } from 'mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export async function POST(req : NextRequest, res : NextApiResponse) {
    try {


    const { searchParams } = new URL(req.url);
    let email=  searchParams.get('email') || null 
    let password =  searchParams.get('password') || null 
    console.log('email: ', email,password);
    if (!password || !email) {
        return NextResponse.json({success: false});      
    }
    const Users = await client
    .db("GIFTS")
    .collection("CLIENTS");

    // let moreProducts: any[]= []
    const selectedUser = await Users
        .findOne({email});



     
    if (!selectedUser ) {
        return NextResponse.json({success: false});
    }


    const isSameUser = await bcrypt.compare(password.replace(/\s+/g, ''), selectedUser.password);
      
    if(isSameUser) {
       const token = await jwt.sign({ id:selectedUser._id,name:selectedUser.name,
        email:selectedUser.email }, `4124kopwkf-0riq0924i12jrionqwoirw09124v90fjioqwjr0v12-vjsfmxwepowpfvheinhrmoiwr`,{ expiresIn: '94h' });
       if (!token) {throw 'Error generating token'}
       return NextResponse.json({success:true, authorized: true,jwt: token});


       }



}
catch ( e) {
    console.log(' e: get by id:',  e);
    return NextResponse.json({
        success: false
      
    });
}

}
export const dynamic = 'force-dynamic'