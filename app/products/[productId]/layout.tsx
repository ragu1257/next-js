import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details Page",
  description: "Explore the product details page.",
};

export default function ProductDetailsLayout({children}: Readonly<{children: React.ReactNode}>){
  return(
    <>
    {children}
    <h2>Features Product</h2>
    caroousal here
    </>
  )
}