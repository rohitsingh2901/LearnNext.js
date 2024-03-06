"use client"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Dynamic Routing</h1>
      <p>
      Dynamic routing in Next.js 13 allows you to create routes based on dynamic data¹. This is useful when you don't know the exact segment names ahead of time.

      Here's how it works:
      - A dynamic segment can be created by wrapping a file or folder name in square brackets: `[segmentName]`. For example, `[id]` or `[slug]`.
      - Dynamic segments can be accessed from `useRouter`.
      - For example, a blog could include the following route `pages/blog/[slug].js` where `[slug]` is the dynamic segment for blog posts.
      - Dynamic segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets `[...segmentName]`. For example, `pages/shop/[...slug].js` will match `/shop/clothes`, but also `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`, and so on.
      - Catch-all segments can be made optional by including the parameter in double square brackets: `[ [...segmentName]]`. For example, `pages/shop/[ [...slug]].js` will also match `/shop`, in addition to `/shop/clothes`, `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`.

      </p>
    </main>
  );
}
