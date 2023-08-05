// import { server } from '@/Utils/Server'
// import Head from 'next/head'
import React from 'react'

export const metadata = {
  title: 'Product Page - Beyond Luxury - Lebanon Online Store',
  description: `Shop the latest luxury fashion for modern women at Beyond Luxury. Premium quality clothing and accessories with delivery all over Lebanon Online Shop.`,
  icons: {
      icon:`https://ucarecdn.com/7ce2b5a5-620a-457e-a69d-fec5388db431/359711183_236017772585464_7278070160350273321_n.jpg`
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