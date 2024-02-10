import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=10", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Products = async () => {
  const data = await getData();
  const products = data.products;
  return (
    <div className="w-screen grid lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
      {products.map((item) => (
        <Link href={`/products/${item.id}`}>
          <div key={item.id} className="mt-5">
            <div className="w-72 h-48 relative">
              <Image
                src={item.thumbnail}
                fill={true}
                alt="thumbnail"
                className="object-cover"
              />
            </div>
            <div className="bg-gray-100 p-3">
              <div className="text-xl font-bold">{item.title}</div>
              <div className="flex justify-between mt-3">
                <span>{`$${item.price}`}</span>
                <span>{`Stock ${item.stock}`}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
