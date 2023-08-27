import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Typography } from '@mui/material';




export const countriesList = [
  {
    name: 'United States',
    currency: 'USD',
    exchangeRate: 1,
  },
  {
      name: 'United Arab Emirates',
      currency: 'AED',
      exchangeRate: .4,
    },
 
    {
      name: 'United Kingdom',
      currency: 'GBP',
      exchangeRate: 0.792404,
    },
    {
      name: 'Canada',
      currency: 'CAD',
      exchangeRate: 1.357513,
    },
    {
      name: 'Australia',
      currency: 'AUD',
      exchangeRate: 1.555237,
    },
    {
      name: 'Eurozone',
      currency: 'EUR',
      exchangeRate: 0.925241,
    },
    {
      name: 'Japan',
      currency: 'JPY',
      exchangeRate: 145.956699,
    },
    {
      name: 'Switzerland',
      currency: 'CHF',
      exchangeRate: 0.8849,
    },
    {
      name: 'Saudi Arabia',
      currency: 'SAR',
      exchangeRate: 0,
    },
    {
      name: 'South Korea',
      currency: 'KRW',
      exchangeRate: 1323.630644,
    },
    {
      name: 'India',
      currency: 'INR',
      exchangeRate: 82.627683,
    },
    {
      name: 'Brazil',
      currency: 'BRL',
      exchangeRate: 4.859734,
    },
    {
      name: 'Russia',
      currency: 'RUB',
      exchangeRate: 104.99999999999999,
    },
    {
      name: 'China',
      currency: 'CNY',
      exchangeRate: 7.289323,
    },
];
export default function SelectSmall({rate,setRate}:{rate:number,setRate:any}) {

  


  const handleChange = (event: SelectChangeEvent) => {

    setRate(Number(event?.target?.value || 1) );
  };

  const [countries, setCountries] = React.useState(countriesList); // Your initial country array

  // React.useEffect(() => {
  //   // Fetch the exchange rates from the API
  //   fetch('https://exchange-rates.abstractapi.com/v1/live/?api_key=883907b1a6fb417199f9243d5c2f3089&base=USD')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('data: ', data);
  //       // Update exchange rates in the country array
  //       const updatedCountries = countries.map(country => ({
  //         ...country,
  //         exchangeRate: data.exchange_rates[country.currency] || country.exchangeRate,
  //       }));
        
  //       setCountries(updatedCountries);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching exchange rates:', error);
  //     });
    
  // }, []);

  return (
    <FormControl sx={{ mx: 'auto', width: '100%' ,mt:2 }} className='flex ' size="small">
      <InputLabel id="demo-select-small-label">Rate</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={`${rate}`}
        label="Rate"
        onChange={handleChange}
      >
  
  
        {countries.map(country => (
   
      <MenuItem key={country.name} value={Number(country?.exchangeRate)}>
      <Box className='flex center gap1'>
        <Typography sx={{fontSize:'.7en'}}>
        {country.name} - {country.currency} 
        </Typography>
    
      </Box>
      
    </MenuItem>


        ))}
      </Select>
    </FormControl>
  );
}