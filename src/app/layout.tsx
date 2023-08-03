import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'Beyond Luxury - Modern and Premium Quality Fashion in Lebanon',
    description: `Shop the latest luxury fashion for modern women at Beyond Luxury. Premium quality clothing and accessories with delivery all over Lebanon. DM to order.`,
    icons: {
        icon:`https://ucarecdn.com/02525c92-bb29-42fb-a57b-37f66be9e061/363298932_1005526440451332_5413838414448583539_n.jpg`
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
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
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
