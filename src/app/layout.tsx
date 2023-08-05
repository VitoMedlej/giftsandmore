import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'Gifts & More LB | Online Gift Shop In Lebanon',
    description: `Looking for unique gifts in Lebanon? Explore Gifts & More LB's online store! We offer delivery to all of lebanon | Unique Gifts for All Occasions `,
    icons: {
        icon:`https://ucarecdn.com/7ce2b5a5-620a-457e-a69d-fec5388db431/359711183_236017772585464_7278070160350273321_n.jpg`
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
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    <ScrollToTop/>

                     {children}
                    {/* {children} */}
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
