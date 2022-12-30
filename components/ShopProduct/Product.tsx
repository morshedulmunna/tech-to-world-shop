import Image from "next/image";
import React from "react";
import productItem from "../../assets/product/image1.jpg";

type Props = {};

const Product = (props: Props) => {
  return (
    <div className="mx-6">
      <div className=" cursor-pointer w-full relative">
        {/* this Span Show Which product Available How Many Items Or Stock or Stock Out . that means this is Product status Ui */}
        <span className=" absolute top-3 left-3 bg-pink-300 rounded-full p-3 px-5 text-white">
          New
        </span>

        {/* This Div Only Show Product Image  */}
        <div className="w-full h-fit rounded-lg bg-gray-100">
          <Image className="rounded-lg" src={productItem} alt="Shop Item" />
        </div>

        {/* This is Product tittle and price Ui Show Section */}
        <div className="p-1 w-full">
          <div className="flex justify-between items-center text-[14px] ">
            <span>Category VR GLasses</span>
            <span> ***** </span>
          </div>
          <h3 className="text-blue-500 text-[18px] hover:text-red-500 duration-300 ease-in-out py-1">
            Headphones Model JHSKR Well Class Product
          </h3>
          <p className="text-[16px]"> $45.00 </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
