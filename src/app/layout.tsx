import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'The Craft Room | Arts & Crafts Supplies, Cricut Products',
    description: `Shop at The Craft Room, where creativity becomes reality. Find all your arts and
     crafts supplies, including best Cricut products in Lebanon`,
    icons: {
        icon: 'https://ucarecdn.com/92989d57-0dd8-40f7-9b2b-7ab889e5cd11/343109195_759962312285' +
                '830_7168937497940647871_n.jpg'
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
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;700&display=swap" rel="stylesheet"/>
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
