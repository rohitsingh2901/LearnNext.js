"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>fetch API data in Server component</h1>
      <Link href="/productlist">Go to Products</Link>
      
    </main>
  );
}
