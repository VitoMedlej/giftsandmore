"use client"
import { createContext, useContext, useState } from "react";
import NextNProgress from 'nextjs-progressbar';
export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
// export const Categories = createContext < any > ([]);
export const LangContext = createContext < any > ('en');




const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {
            // const a = 421412;
        const [open,
            setOpen] = useState(false);
        const [cartOpen,
            setCartOpen] = useState(false);
            const [lang,
                setLang] = useState('ar');
            return (
                
                <DrawerContext.Provider value={{open,setOpen}}>
        {/* <Categories.Provider value={{cates, setCates}}> */}
        <CartContext.Provider value={{cartOpen, setCartOpen}}>
        <LangContext.Provider value={{lang, setLang}}>
        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            <NextNProgress color='red'/>
            {children}
            </LangContext.Provider>
   
        </CartContext.Provider>
        {/* </Categories.Provider> */}
    </DrawerContext.Provider>
            )
        }

export default ContextWrapper

export const useDrawerContext = () => useContext(DrawerContext);
export const useCartContext = () => useContext(CartContext);

export const useLangContext = () => useContext(LangContext);
