"use client"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>404 page not found</h1>
      <p>
      In Next.js 13.4, the 404 page is handled by a special `not-found.js` file. This file should be placed in the `app` directory of your project. When a user navigates to a URL that does not match any routes in your application, Next.js will automatically render the `not-found.js` page. If you want route specific 404 page then add [...not-found] folder in that that route directory and and page.js inside it.
      </p>
    </main>
  );
}
