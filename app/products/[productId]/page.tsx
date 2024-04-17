export default function ProductPage({params}:{params:{productId:string}}) {
  return (
    <div>
      <h1>Product Page Details {params.productId}</h1>
    </div>
  );
}