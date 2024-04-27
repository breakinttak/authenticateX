import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
// import { useRouter } from 'next/navigation';

export function middleware(request: NextRequest) {
  console.log(request.url);
  
  if(request.url === "v1"){
    if(!cookies().get("email") || !cookies().get("name")){
    // useRouter().push("/")
    NextResponse.redirect(new URL('/'))
    }else{
      return NextResponse.redirect(new URL('/api/', request.url))
    }
  }

  return NextResponse.redirect(new URL('/', request.url))
}