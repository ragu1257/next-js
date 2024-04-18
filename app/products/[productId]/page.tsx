import { Metadata } from "next";

type Props = {
  readonly params: {
    productId: string;
  };
};

export const generateMetadata = ({params}: Props): Metadata => {

  return {
    title: `Product Page Details ${params.productId}`,
    description: `Explore the product details page for product ${params.productId}.`,
  };

}



export default function ProductPage({params}:Props) {
  return (
    <div>
      <h1>Product Page Details {params.productId}</h1>
    </div>
  );
}