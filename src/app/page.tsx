import PreLoader from "@/Components/PreLoader"
import { server } from "@/Utils/Server"
// import { IProduct } from "@/Types/Types"
// import { server } from "@/Utils/Server"
// import { Box,  Container, Typography } from "@mui/material"
// import { useEffect, useState } from "react"

export default  async function Home() {
//   const [data,setData] = useState< {
//     products: IProduct[] | never[] ; 
//     featuredProducts:IProduct[] | never[];
// }>({
//     products : [],
//     featuredProducts :[]
//   })


//    const InitialFetch = async () => {
//     try {
  
//       const req = await fetch(`${server}/api/get-data`,{ next: { revalidate: 400 } })
//       const res = await req.json()
    
//       if (res?.success && res?.data) {
//         setData(res?.data)
//       }
//       return null
//     }
//     catch(er) {
//       console.log('er getAll: ', er);
  
//     }
//   }
//   useEffect(() => {
    
//     InitialFetch()

//   }, [])
try {

      // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ next: { revalidate: 10 } })
      const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ cache: 'no-store' })
      let res = await req.json()
      // let res = {data:null}
      return (
        <PreLoader data={res?.data}/>
       )
}
catch (e) {
  console.log('e home: ', e);
  return (
    <PreLoader data={null}/>
   )

}
    


}
