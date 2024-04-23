"use client";
import { notFound} from "next/navigation";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function ProductReviewPage({params}: {readonly params: {readonly productId: string, readonly reviewId: string}}) {

  const random = getRandomInt(2);

  if(random === 1){
    throw new Error("Error loadin review data");
  }

  if(parseInt(params.reviewId) > 10){
  notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
}