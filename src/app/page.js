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
      <h1>Nested Routing</h1>
      <p>
      Nested routing in Next.js is a way to create complex URL structures by nesting folders inside each other. Each folder represents a route segment that maps to a URL segment. Here's how it works:<br/>
      - Next.js uses a file-system based router where folders are used to define routes.<br/>
      - To create a nested route, you can nest folders inside each other.<br/>
      - Each folder represents a route segment that maps to a URL segment.- A special `page.js` file is used to make route segments publicly accessible.
      </p>

    </main>
  );
}
