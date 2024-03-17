import { NextResponse } from "next/server"

export function middleware(request){
    // console.log(request)


    // Conditional statements
    // if(request.nextUrl.pathname!='/login'){
    //     return NextResponse.redirect(new URL("/login",request.url))
    // }

    return NextResponse.redirect(new URL("/login",request.url))
}

//Custom matcher config
export const config ={
    //single
    // matcher : "/about/:path*"

    //multiple
    matcher : ["/about/:path*","/studentlist/:path*"]
}