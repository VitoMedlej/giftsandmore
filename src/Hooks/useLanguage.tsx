import { useLangContext } from '@/context/Contexts';
import React from 'react'

const useLanguage = () => {
    const {lang} = useLangContext();
    console.log('lang: ', lang);

    
    
      const text = (textEn : string, textOther ?: string) => {
        return lang === 'en' ? textEn : textOther ? textOther : textEn;
      };
    
      return {text };
}

export default useLanguage