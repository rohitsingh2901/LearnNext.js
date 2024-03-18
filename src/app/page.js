"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Rendering in next.js</h1>
      <p>
        Rendering in Next.js refers to the process of converting your
        application code into a user interface that can be interacted with.
        There are three main types of rendering in Next.js:
      </p>
      <li>
        1. Pre-rendering: By default, Next.js pre-renders every page. This means
        that Next.js generates HTML for each page in advance, instead of having
        it all done by client-side JavaScript. Pre-rendering can result in
        better performance and SEO. There are two forms of pre-rendering in
        Next.js:
        <br />
        - Static Generation: The HTML is generated at build time and will be
        reused on each request.
        <br />- Server-side Rendering: The HTML is generated on each request.
      </li>
      <li>
        2. Client-side Rendering (CSR): Some parts of a page can be rendered
        entirely by client-side JavaScript¹. In Next.js, there are two ways you
        can implement client-side rendering: - Using React's `useEffect()` hook
        inside your pages instead of the server-side rendering methods
        (`getStaticProps` and `getServerSideProps`).
        <br />
        - Using a data fetching library like SWR or TanStack Query to fetch data
        on the client.
        <br />
      </li>
      <li>
        3. Hybrid Rendering: Next.js allows you to create hybrid applications
        where parts of your code can be rendered on the server or the client.
        You can use Static Generation for most pages and using Server-side
        Rendering for others.
      </li><br /><br />

      <h3>Pre-rendering in Next.js</h3>
      <p>
        Pre-rendering in Next.js is the process where HTML for each page is
        generated in advance, instead of being entirely done by client-side
        JavaScript. This can result in better performance and SEO¹. Each
        generated HTML is associated with minimal JavaScript code necessary for
        that page. When a page is loaded by the browser, its JavaScript code
        runs and makes the page fully interactive. There are two forms of
        pre-rendering in Next.js: 
      </p>
      <li>
      1. Static Generation: The HTML is generated at build time and will be reused on each request. This is
        useful for pages that can be pre-rendered ahead of a user's request. You
        can also add and update the HTML by re-running the build. 
      </li>
      <li>
      2.Server-side Rendering: The HTML is generated on each request. This
        is useful for pages that show frequently updated data, and for pages
        that include user-specific data. You can choose which pre-rendering
        form to use for each page in your application¹. Some pages could use
        static generation and others could use server-side rendering. This
        flexibility is one of the reasons why Next.js has become popular.
      </li>
    </main>
  );
}
