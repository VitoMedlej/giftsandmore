import { countriesList } from '@/Components/CountryModal/CountrySelect';
import { useRateContext } from '@/context/Contexts';
import React from 'react'

const Index = () => {
    const {rate} = useRateContext()
  
    function adjustPrice(originalPrice: number): string {
        
        const matchedCurrency = countriesList.find(item => item.exchangeRate === rate);
      
        if (matchedCurrency) {
          if (rate === 1) {
            return `${originalPrice}$`;
          } else {
            const adjustedPrice = originalPrice * rate;
            const currencySymbols: {[key:string]:string} = {
              USD: '$',
              AED: 'د.إ',
              GBP: '£',
              CAD: 'C$',
              AUD: 'A$',
              EUR: '€',
              JPY: '¥',
              CHF: 'CHF',
              SAR: 'ر.س',
              KRW: '₩',
              INR: '₹',
              BRL: 'R$',
              RUB: '₽',
              CNY: '¥',
              // Add symbols for other currencies if needed
            };
            const currencySymbol = currencySymbols[matchedCurrency.currency] || matchedCurrency.currency;
            
            return `${adjustedPrice.toFixed(2)} ${currencySymbol}`;
          
        }
    
        } else {
          const originalPriceInUSD = originalPrice.toFixed(2);
          return `${originalPriceInUSD}$`;
        }
      }
      return {adjustPrice}
}

export default Index