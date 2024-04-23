import Link from "next/link";

export default function ProductsPage() {

  const product = [
    {
      id: 1,
      name: 'product1'
    },
    {
      id: 2,
      name: 'product2'
    }
  ]
  return (
    <div>
      <h1>Products List</h1>
      <ol>
        {product.map((p) => (
          <li key={p.id}>
            <Link href={`products/${p.id}`} >{p.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
} 