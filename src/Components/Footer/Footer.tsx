"use client"
import Link from 'next/link';
import {Divider, Typography  } from '@mui/material'
import './style.css'
import SMicons from '../SMicons/SMicons';
import useLanguage from '@/Hooks/useLanguage';


const Footer = () =>
{
  
const {text} = useLanguage();
return (

  <footer className="site-footer " style={{color:'black',background:'white'}}>

<Divider></Divider>

    <div className="container " style={{marginTop:15,color:'black',background:'white'}}>
      <div className="site-footer__top ">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img ' src='https://ucarecdn.com/01ea6d0a-fdbf-4a2f-b647-e76b2d700e32/365014401_1944248375937735_7655171259538237739_n.jpg' alt="Gifts and More Lebanon Logo" />
            </Link>
          </div>
          <Typography component='h1' sx={{ fontSize: '.9em',color:"2b2b2b" }}  className='footer-p '>
        
        {text(`Welcome to Gifts & More LB, your one-stop online gift store in Lebanon, where the art of giving is celebrated with an extensive range of unique and thoughtful presents. With a passion for exceptional gifting experiences, we curate a diverse collection of products that cater to every occasion and recipient.`,
        `مرحبًا بكم في Gifts & More LB ، متجر الهدايا الشامل عبر الإنترنت في لبنان ، حيث يتم الاحتفال بفن العطاء من خلال مجموعة واسعة من الهدايا الفريدة والمدروسة. مع شغفنا بتجارب الهدايا الاستثنائية ، نقوم برعاية مجموعة متنوعة من المنتجات التي تناسب كل مناسبة ومتلق.`
        )}
        
          </Typography>
          <SMicons/>

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className="site-footer__links ">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul className=' ul-white'>
            <li className='link-title'>{text('Site links','روابط الموقع')}</li>
            <li><Link  href="/">{text('Home','الصفحة الرئيسية')}</Link></li>
            <li><Link href="/collection/products">
            
            {text('All Products','جميع المنتجات')}
            </Link></li> 
            <li><Link href="/cart">
            {text('Cart','عربة التسوق')}
            </Link></li>
            <li><Link href="/checkout">
            {text('Checkout','الدفع')}
              
            
              </Link></li>
            <li><Link href="https://wa.me/76600541">
            {text('Contact Us','اتصل بنا')}
              
              </Link></li>
          </ul>
     
          <ul  className='ul-white' style={{color:'black'}}>
            <li className='link-title'>
            {text('Contact Us','التواصل')}
              
              
              </li>
            <li><Link href="#"> Lebanon/Beirut Online</Link></li>
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a href='https://www.instagram.com/gifts.and.more_lb/' target="_blank" rel="noreferrer" >@gifts.and.more_lb</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >+{process.env.NEXT_PUBLIC_WA}</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div className="site-footer__bottom " style={{color:'black',borderTop:"1px solid #0000001f"}}>
      <div className="container " style={{color:'black'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'black' }} href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></p>
      </div>
    </div>
  </footer>
)
}

;


export default Footer

