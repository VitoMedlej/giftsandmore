// import { server } from '@/Utils/Server'
// import Head from 'next/head'
import React from 'react'

export const metadata = {
  title: 'Gifts & More LB | Online Gift Shop In Lebanon',
    description: `Looking for unique gifts in Lebanon? Explore Gifts & More LB's online store! We offer delivery to all of lebanon | Unique Gifts for All Occasions `,
  icons: {
      icon:`https://ucarecdn.com/01ea6d0a-fdbf-4a2f-b647-e76b2d700e32/365014401_1944248375937735_7655171259538237739_n.jpg`
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