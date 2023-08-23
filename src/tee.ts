// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   // Clone the request headers so that we don't modify the original headers object
//   const requestHeaders = new Headers(request.headers);
//   console.log('requestHeaders: ', requestHeaders?.values);
//   const forwarded = requestHeaders.get('user-agent');
//   const newRequest = new Request(request);
//   // Check if the hosting platform provides the client's IP address and store it in a variable

//   // newRequest.newvalue =  forwarded ? forwarded : null
//   // Add the client's IP address to the request headers using the 'x-forwarded-for' field

//   // Return a new request object with the updated headers using NextResponse.next()
//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
    
//   });
// }