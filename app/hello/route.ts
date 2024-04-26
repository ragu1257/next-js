import {headers} from "next/headers"

export async function GET(){
  const headerList = headers()
  console.log(headerList.get("Authorization"))
  return new Response("<h1>GET handler</h1>", {
    headers : {
      "Content-Type": "text/html"
    }
  }) 
}