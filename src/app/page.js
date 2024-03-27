"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Use client component with server component</h1>
      <p>
      In Next.js, Server Components and Client Components are used together to leverage the strengths of both server-side and client-side rendering.<br/>

Here's why we need Client Components inside Server Components:<br/>

1. Interactive UI: Client Components allow you to write interactive UI that is pre-rendered on the server and can use client JavaScript to run in the browser. For example, React hooks, such as `useState()`, `useEffect()`, `useContext()`, are only available on the client side. If you need to access browser-related things, like `onClick` events, window or browser API, you need to use the Client Component.<br/>

2. Preserving Server-Side Benefits: The presence of a Server Component within a Client Component does not alter its server-side rendering nature. This is because the execution context of the Server Component (server-side rendering) is preserved, maintaining its benefits such as improved SEO and potentially faster initial load times due to server-side execution.<br/>

3. Optimized Performance: By moving rendering and data fetching to the server, you can reduce the amount of code sent to the client, which can improve your application's performance. But, to make your UI interactive, you need to update the DOM on the client. Therefore, the code you write for the server and the client is not always the same.<br/>

4. Composition Patterns: In React, you choose where to place the network boundary in your component tree. For example, you can fetch data and render a user's posts on the server (using Server Components), then render the interactive `LikeButton` for each post on the client (using Client Components).
      </p>
    </main>
  );
}
