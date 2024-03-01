"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginComponent = () =>{
    const router = useRouter();
    return (
        <div>
            <h1>Login Page</h1>
            <Link href="/">Go to Home Page</Link><br/>
            <button onClick={()=>{router.push("/")}}>Home Page</button>
        </div>
    )
}
export default LoginComponent;