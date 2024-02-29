import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Basic Routing | Create new Page </h1>
      <h3>How to create new page?</h3>
      <p>
      Creating a new page in Next.js is straightforward and involves the following steps:<br></br>
      1. Create a New folder: Inside the root directory of your project, create a new folder whose name is same as your route. The name of this folder will correspond to the route for the new page.<br></br>
      2. Create a New File: Inside that folder of your project, create a new page.js file.<br></br>
      3. Export a React Component: In the newly created page.js file, define a React component and export it as the default export. This component will be the content of your new page.<br></br>
      Example:<br></br>
      - localhost:3000/login<br></br>
      - src/login/page.js<br></br>
      </p>
    </main>
  );
}
