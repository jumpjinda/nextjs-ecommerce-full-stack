import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="px-20 py-10 w-screen">
      <p className="text-5xl">
        We Sell Phone & Laptop!
      </p>
      <p className="mt-5 italic">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptas ab labore et
        dicta minus veniam culpa quis eveniet
        natus illo aliquam dignissimos, assumenda
        optio ad, nisi, consectetur quos molestiae
        reiciendis. Totam quia quasi dicta maiores
        id cupiditate deserunt debitis explicabo
        veritatis dolore architecto et natus ut
        fugiat, laudantium esse dolor non. Odio
        obcaecati ducimus adipisci modi, veritatis
        minus earum eveniet. Minima, qui similique
        quidem labore eum recusandae dignissimos
        mollitia sit fuga! Fuga natus fugit
        exercitationem minus, ad vero nobis
        repudiandae, quasi, explicabo voluptates
        dolore numquam! Dignissimos labore iure
        numquam enim?
      </p>
      <div className="flex h-50 items-center mt-10">
        <Image
          src="https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={400}
          height={400}
          alt="phone"
          placeholder="blur"
          blurDataURL={
            "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
        <div className="w-2/3 flex justify-center">
          <Link href="/products">
            <p className="text-5xl">
              See Our Products Here!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
