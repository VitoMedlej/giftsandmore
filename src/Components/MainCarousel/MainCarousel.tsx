"use client"

import Preloader3 from '../Preloader3';

const MainCarousel =   ({images} : {images : string[] | [] | null}) => {

  

    try {

        // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ next: { revalidate: 10 } })
        // const req = await fetch(`https://getpantry.cloud/apiv1/pantry/6e7bb4b1-a9a5-4912-b2d5-5f1cdb3abbfd/basket/Images`,{ next: { revalidate: 400 } })
        // let res : any = await  req.json();
        // let res = {data:null}
        return (
          <Preloader3 res={images}/>
         )
  }
  catch (e) {
    console.log('e home: ', e);
    return (
      <Preloader3 res={null}/>
     )
  
  }


   
//      const fetcher = async () => {
//     const req = await fetch(`https://getpantry.cloud/apiv1/pantry/6e7bb4b1-a9a5-4912-b2d5-5f1cdb3abbfd/basket/Images`,{ next: { revalidate: 400 } })
//     let res : any = await  req.json() ;
//     console.log('res: ', res);
//     if (res && res?.MainCarousel) {
//       setImgs(res?.MainCarousel)
//     }
//   }
//   fetcher()
   
}

// export const revalidate = 3600
export default MainCarousel