import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'
import AnimatedText from '@/Components/Navbar/AnimatedText'
import AlertChip from '@/Components/AlertChip/AlertChip'

export const metadata = {
    title: 'Gifts & More LB | Online Gift Shop In Lebanon',
    description: `Looking for unique gifts in Lebanon? Explore Gifts & More LB's online store! We offer delivery to all of lebanon | Unique Gifts for All Occasions `,
    icons: {
        icon:`https://ucarecdn.com/01ea6d0a-fdbf-4a2f-b647-e76b2d700e32/365014401_1944248375937735_7655171259538237739_n.jpg`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html id='body' lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700&display=swap" rel="stylesheet"/>
            </head>

            <body className='relative'>

                <ContextWrapper>
      {/* <AnimatedText/> */}
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <AlertChip/>
                    <QuickCart/>
                    <ScrollToTop/>

                     {children}
                    {/* {children} */}
                <Footer/>
                </ContextWrapper>
            </body>
        </html>
    )
}
