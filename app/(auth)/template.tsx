"use client";
import {useState} from 'react';

export default function Auth({children}: Readonly<{children: React.ReactNode}>) {

  const [inter, setInter] = useState("");

  return (
    <>   
    <p>Enter your name here</p>
    <input type="text" value={inter} onChange={(e) => setInter(e.target.value)} placeholder="Enter your name" />
    {children}
    <h1>This is layout for auth pages</h1>
    </>
 
  );
}