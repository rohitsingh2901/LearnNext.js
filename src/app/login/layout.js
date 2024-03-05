"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      {pathName !== "/login/teacherlogin" ? (
        <ul className="login-menu">
          <li>Login Navbar</li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/studentlogin">Student Login</Link>
          </li>
          <li>
            <Link href="/login/teacherlogin">Teacher Login </Link>
          </li>
        </ul>
      ) : <Link href="/">Go to Home Page</Link>}

      {children}
    </div>
  );
}
