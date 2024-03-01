"use client"
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (path) =>{
    router.push(path);
  }
  return (
    <main>
      <h1>Link and Navigation</h1>
      <h3>Linking</h3>
      <p>
      Linking is done using the Link component provided by Next.js. This component allows you to do client-side navigation between two pages in the same Next.js app. Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.
      </p><br/>
      <Link href="/login">Go to Login Page</Link>
      <br/><br/>
      <Link href="/about">Go to About Page</Link>
      <br/><br/>
      <h3>Navigation</h3>
      <p>
      Navigation in Next.js can be done imperatively using the `next/navigation` package. This allows you to programmatically change the route, for example, in response to a button click/event listner.
      </p><br/>
      <button onClick={()=>{navigate("/login")}}>Login Page</button>
      <br/><br/>
      <button onClick={()=>{navigate("/about")}}>About Page</button>
    </main>
  );
}
