"use client"
import { createContext, useContext, useEffect, useState } from "react";
import NextNProgress from 'nextjs-progressbar';
import { loadState, saveState } from "@/Utils/LocalstorageFn";
export const DrawerContext = createContext < any > ({});
export const ChipContext = createContext < any > ({open:false,text:'',severity:''});
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
            const [chipStatus,
                setChipStatus] = useState({
                    text :'',
                    open: false,
                    severity : ''
                });
            const [lang,
                setLang] = useState('en');


                    
    // Load language from localStorage on component mount
    useEffect(() => {
        const savedLang = loadState('Savedlanguage');
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);

    // Save language to localStorage whenever it changes
    useEffect(() => {
        saveState('Savedlanguage', lang);
    }, [lang]);



            return (
                
                <DrawerContext.Provider value={{open,setOpen}}>
                <ChipContext.Provider value={{chipStatus,setChipStatus}}>
        {/* <Categories.Provider value={{cates, setCates}}> */}
        <CartContext.Provider value={{cartOpen, setCartOpen}}>
        <LangContext.Provider value={{lang, setLang}}>
            
        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
            </LangContext.Provider>
   
        </CartContext.Provider>
        {/* </Categories.Provider> */}
    </ChipContext.Provider>
    </DrawerContext.Provider>
            )
        }

export default ContextWrapper

export const useDrawerContext = () => useContext(DrawerContext);
export const useCartContext = () => useContext(CartContext);
export const useChipContext = () => useContext(ChipContext);

export const useLangContext = () => useContext(LangContext);
