import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

// Auto generateMetadata (head title)
export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
  };
}

const ProductDetail = async ({ params }) => {
  const data = await getData(params.id);
  console.log(data);
  return (
    <div className="w-screen flex items-center justify-center gap-10 m-20 px-20">
      <div>
        <Image src={data.thumbnail} width={500} height={200} alt={data.title} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-5xl font90-bold">{data.title}</div>
        <div className="flex">
          <span className="font-bold">Description</span>: {data.description}
        </div>
        <div>Price: ${data.price}</div>
        <div>
          <p>
            Rating:&nbsp;
            <span>{data.rating}</span>
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
          </p>
        </div>
        <div>{data.stock} Item Remaining</div>
      </div>
    </div>
  );
};

export default ProductDetail;
