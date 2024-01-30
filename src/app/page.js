'use client' // Resolve Error 1: it specify that this components(its child component) 
import { useState } from "react";
import styles from "./page.module.css";
// 'use client'  We can't declare it here it will always declared at the top

export default function Home() {
  const [name, setName] = useState("Rohit") //state
  const name2 = "Rohit" // Variable

  const InnerComponent=()=>{
    return(
      
      <h1>Inner Component</h1>
    )
  }
  return (
    <main className={styles.main}>
      <h1>Events, function and state</h1>
      <button onClick={()=>alert("Hello there!!")}>Click here</button> 
      {/* throws error: If you need interactivity, consider converting part of this to a Client Component. ----------- 1 */}



      <InnerComponent/>
      {InnerComponent()}
    </main>
  );
}

/* 
1. use client

The use client directive in Next.js is used to define a component as a client-side rendering entity. By default, all components in Next.js 13 inside the app folder are server components. Server components cannot use client features such as useState, useEffect, etc.
When you add the use client directive at the top of a file (before any imports), you’re declaring a boundary between a Server and Client Component modules1. This means that the component should be rendered and executed within the user’s browser environment, rather than on the server2

2. State vs Variable

-> Lifetime: A variable’s value persists only for the duration of its function’s execution1. Once the function exits, the variable “disappears” and its value is lost. On the other hand, state variables in React are preserved by the framework. Even after the function exits, the state variable retains its value.
-> Reactivity: When a variable’s value changes, it doesn’t cause the component to re-render23. However, when a state variable’s value changes (using setState or useState), React will re-render the component.


3. Difference b/w <InnerComponent/> and {InnerComponent()}

When you use <Component /> in your JSX, you are treating it as a React component. This means that React will create an instance of the component and manage its state and lifecycle. It can accept props just like any other React component. This is the recommended way to use components in React.

When you use {Component()} in your JSX, you are treating it as a JavaScript function call. It is not treated as a React component. This means that React will execute the Component function immediately and render the JSX returned by that function. It does not have access to React's state management or lifecycle methods.

In this case, you cannot pass props directly to Component, and it will not behave like a typical React component. It's just a function that returns JSX, and it gets called whenever your main component (Home in this case) re-renders.
*/