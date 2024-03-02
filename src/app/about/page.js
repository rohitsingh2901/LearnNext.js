"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutComponent = () =>{
    const router = useRouter();
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/">Go to Home Page</Link><br/>
            <button onClick={()=>{router.push("/")}}>Home Page</button><br/>
            <button onClick={()=>{router.push("/about/aboutstudents")}}>About Students Page</button><br/>
            <button onClick={()=>{router.push("/about/aboutteachers")}}>About Teachers Page</button>
        </div>
    )
}
export default AboutComponent;