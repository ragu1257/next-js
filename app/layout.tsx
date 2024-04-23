"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.scss"
const inter = Inter({ subsets: ["latin"] });

const Links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/docs",
    label: "Docs",
  },
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/register",
    label: "Register",
  },
  {
    href: "/products",
    label: "Products",
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                background: "#037290",
                color: "#fff",
              }}
            >
              {Links.map((link) => {
                const isActive = pathname === (link.href);
                return (
               
                    <Link key={link.label} href={link.href} className={isActive? "is-active": "is-not-active"}>
                     
                    
                        {link.label}
                
                    </Link>

                );
              })}
            </ul>
          </nav>
        </header>
        <div style={{ marginTop: "100px", height: "100vh" }}>{children}</div>

        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            background: "#037290",
            color: "#fff",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
