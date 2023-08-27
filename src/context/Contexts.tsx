"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { loadState, saveState } from "@/Utils/LocalstorageFn";
export const DrawerContext = createContext < any > ({});
export const ChipContext = createContext < any > ({open:false,text:'',severity:''});
export const CartContext = createContext < any > ({});
// export const Categories = createContext < any > ([]);
export const LangContext = createContext < any > ('en');
export const RateContext = createContext < any > (1);




const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {
        const [open,
            setOpen] = useState(false);
            const [rate,
                setRate] = useState(1);
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

    useEffect(() => {
        const conversionRate = loadState('conversionRate');
        if (conversionRate) {
            setRate(conversionRate);
        }
    }, []);

    useEffect(() => {
        saveState('conversionRate', rate);
    }, [rate]);



            return (
                
                <DrawerContext.Provider value={{open,setOpen}}>
                <ChipContext.Provider value={{chipStatus,setChipStatus}}>
        {/* <Categories.Provider value={{cates, setCates}}> */}
        <CartContext.Provider value={{cartOpen, setCartOpen}}>
        <LangContext.Provider value={{lang, setLang}}>
        <RateContext.Provider value={{rate, setRate}}>
            
        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
            </RateContext.Provider>
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
export const useRateContext = () => useContext(RateContext);
