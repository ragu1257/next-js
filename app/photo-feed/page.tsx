"use client";

import Wonders from "./wonders"
import Image from "next/image"
import Link from "next/link"

export default function PhotoFeed() {
  const images = Wonders.map((wonder) => {
    return (
      <div style={{padding: "20px"}} key={wonder.id}>
        <h2>{wonder.title}</h2>
        <Link href={`/photo-feed/${wonder.id}`}>
        <Image src={wonder.src
        } alt={wonder.title} />
        </Link>
  
        <p>{wonder.description}</p>
      </div>
    )
  }
  )

  return (
    <>
    <h1>Photo Feed Pagee</h1>
   <div style={{display: "flex"}}> {images} </div>
    </>
  );
}