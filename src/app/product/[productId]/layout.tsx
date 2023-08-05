// import { server } from '@/Utils/Server'
// import Head from 'next/head'
import React from 'react'

export const metadata = {
  title: 'Gifts & More LB | Online Gift Shop In Lebanon',
    description: `Looking for unique gifts in Lebanon? Explore Gifts & More LB's online store! We offer delivery to all of lebanon | Unique Gifts for All Occasions `,
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