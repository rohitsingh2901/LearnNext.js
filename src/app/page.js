"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Client Side vs PreRendering</h1>
      <br />
      <h3>How to know rendering type ?</h3>
      <p>
        In Next.js, the rendering type of a page is determined by the data
        fetching method used in the page component. Here's how you can identify
        the rendering type: <br />
        1. Static Generation: If a page uses the `getStaticProps` function, it's
        using Static Generation¹. This means the page's HTML is generated at
        build time and will be reused on each request. <br />
        2. Server-side Rendering: If a page uses the `getServerSideProps`
        function, it's using Server-side Rendering². This means the page's HTML
        is generated on each request. <br />
        3. Client-side Rendering: If a page does not use `getStaticProps` or
        `getServerSideProps`, it's using Cl ient-side Rendering. This means the
        page's HTML is not generated in advance, but is instead generated in the
        browser when the page is loaded.
      </p>
      <br />
      <h3>Why server side rendering is important?</h3>
      <p>
        Server-side rendering (SSR) is important for several reasons:
        <br />
        1. Improved Performance: With SSR, the server sends a fully rendered
        page to the client, so the browser can start displaying the content
        faster. This can lead to a better user experience, especially on slower
        networks or devices.
        <br />
        2. Search Engine Optimization (SEO): Search engines can crawl and index
        server-rendered pages more easily. While many search engines can index
        client-rendered content, server-rendered content is generally more
        reliable for SEO.
        <br />
        3. Social Sharing: When users share your website's URL on social media
        platforms, these platforms use meta tags in the HTML to generate
        previews. SSR ensures that these meta tags are present even when
        JavaScript is disabled, improving the reliability of social sharing.
        <br />
        4. First Contentful Paint (FCP): SSR can improve the FCP, a key metric
        for measuring perceived performance. It marks the point when the first
        piece of content from the DOM is rendered.
      </p>
      <br />
      <h3>How SEO works ? and how server side rendering helps better SEO?</h3>
      <p>
        Search Engine Optimization (SEO) is a process used by marketers to
        optimize a website for search engines like Google, Bing, Yahoo, and
        others. SEO works by optimizing a website's content, conducting keyword
        research, and earning inbound links to increase that content’s ranking
        and the website’s visibility. The goal of SEO is to increase organic
        traffic to the website.
        <br />
        Here's a simplified explanation of how SEO works:
        <br />
        1. Keyword Research: Identify the terms and phrases (keywords) that can
        generate qualified traffic to your website.
        <br />
        2. Content Optimization: Make certain changes to your website design and
        content that make your site more attractive to a search engine.
        <br />
        3. Link Building: Earn inbound links from other websites to increase
        your site's credibility and visibility.
        <br />
        4. Technical SEO: Ensure your site is crawlable and indexable by search
        engines, and that it provides a good user experience.
        <br />
        Server-side rendering (SSR) is where your site’s content is rendered on
        the web server rather than the browser. SSR can significantly improve
        SEO in several ways:
        <br />
        1. Improved Crawling and Indexing: SSR provides fully rendered content
        for complete indexing, making it easier for search engines to crawl and
        index web pages.
        <br />
        2. Faster Page Load Times: SSR results in faster page loading times,
        which search engines reward in rankings.
        <br />
        3. Avoiding SEO Pitfalls: SSR avoids certain SEO pitfalls associated
        with client-side rendering, such as JavaScript pages being read as a
        blank screen by search engines.
        <br />
      </p>
    </main>
  );
}
