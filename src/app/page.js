"use client"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Middleware in next.js</h1>
      <p>
      In Next.js, Middleware allows you to run code before a request is completed. Based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly. Middleware runs before cached content and routes are matched.
      </p>
      <p>Here’s how you can use Middleware in Next.js:</p>
      <p>
      1. Create a Middleware File: Use the file `middleware.ts` (or `.js`) in the root of your project to define Middleware. For example, at the same level as `pages` or `app`, or inside `src` if applicable.
      </p><br/>
      <p>
      2. Matching Paths: Middleware will be invoked for every route in your project. The following is the execution order: headers from `next.config.js`, redirects from `next.config.js`, Middleware (rewrites, redirects, etc.), `beforeFiles` (rewrites) from `next.config.js`, Filesystem routes (`public/`, `_next/static/`, `pages/`, `app/`, etc.), `afterFiles` (rewrites) from `next.config.js`, Dynamic Routes (`/blog/[slug]`), `fallback` (rewrites) from `next.config.js`.
      </p><br/>
      <p>There are two ways to define which paths Middleware will run on:</p>
      <li>
        Custom matcher config
      </li>
      <li>
        Conditional statements
      </li><br/>
      <p>
      3. Multiple Middleware: Next.js 13.4.13 introduces the multiple middleware feature, which allows you to apply multiple middleware functions to a single route. This feature enhances the capabilities of Next.js by enabling better organization, reusability, and flexibility in your server-side rendering logic.
      </p>
    
    </main>
  );
}
