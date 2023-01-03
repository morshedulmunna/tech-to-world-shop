import Image from "next/image";
import React from "react";
import productItem from "../../assets/product/image1.jpg";
import { useRouter } from "next/router";

type Props = {
  width: string;
};

const ProductImage = (props: Props) => {
  const router = useRouter();

  return (
    <div
      className={` ${props.width} h-fit rounded-lg bg-gray-100 relative group`}
    >
      {router.pathname !== "/product/[slug]" && (
        <div className=" absolute rounded-md hidden group-hover:block group-hover:duration-500 group-hover:ease-in-out bg-pink-100 bg-opacity-50 w-full h-full">
          <button className="bg-pink-500 hover:bg-pink-400 px-4 py-2 rounded-full text-white font-bold  flex justify-center items-center absolute top-[50%] left-[50%] -translate-x-[50%]  ">
            Add to Cart
          </button>
        </div>
      )}

      <Image className="rounded-lg" src={productItem} alt="Shop Item" />
    </div>
  );
};

export default ProductImage;
