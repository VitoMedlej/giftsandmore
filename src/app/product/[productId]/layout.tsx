import { server } from '@/Utils/Server'
import Head from 'next/head'
import React from 'react'

export const metadata = {
  title: 'Product Page - Beyond Luxury - Lebanon Online Store',
  description: `Shop the latest luxury fashion for modern women at Beyond Luxury. Premium quality clothing and accessories with delivery all over Lebanon Online Shop.`,
  icons: {
      icon:`https://ucarecdn.com/02525c92-bb29-42fb-a57b-37f66be9e061/363298932_1005526440451332_5413838414448583539_n.jpg`
  }
}

const layout =  ({children}:any) => {

  return (
    <>
    <main >
            {children}
    </main>
    </>
  )
}

export default layout