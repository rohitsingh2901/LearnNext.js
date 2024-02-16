import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Component Type | Server component | Client component</h1>
      <hr></hr>
      <h3>Server Component</h3>
        <li>Render on the Server Side</li>
        <li>By default, All components are Server components.</li>
        <li>They are closer to the Backend</li>
        <li>So BE-related logic and code should write in Server components</li>
        <img src="ClientServer.png" width={500}></img>
        <hr></hr>
      <h3>Client Component</h3>
        <li>Render on the Client Side</li>
        <li>Can make client component with `useclient` directive</li>
        <li>All UI related code and events should be written here</li>
        <hr></hr>
      <h3>Composition Pattern</h3>
      <img src="CompositionPattern.png" width={500}></img>

    </main>
  );
}
