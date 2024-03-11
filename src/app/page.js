"use client"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Dynamic Routing</h1>
      <p>
      Catch-all segments in Next.js routing allow you to handle a varying number of URL segments. This is useful when you need to handle a wide range of URL patterns without having to define multiple pages or routes.Here's how it works:
      </p>
      <li>A catch-all segment can be created by adding an ellipsis (`...`) before the parameter name in the filename or folder name, like this: `[...segmentName]`.</li>
      <li>For example, `pages/shop/[...slug].js` will match `/shop/clothes`, but also `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`, and so on.</li>
      <li>The catch-all segment will match any number of segments following the path.</li>
      <li>Catch-all segments can also be made optional by including the parameter in double square brackets: `[ [...segmentName]]`.</li>
    </main>
  );
}
