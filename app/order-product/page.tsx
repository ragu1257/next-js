"use client";
import { useRouter } from "next/navigation";
export default function OrderProductPage() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order placed successfully");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product Page</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
