import Image from "next/image";
import React from "react";
import productItem from "../../assets/product/image1.jpg";
import { AiFillStar } from "react-icons/ai";
import ProductImage from "../ComponentAtoms/ProductImage";

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
        <ProductImage width={""} />

        {/* This is Product tittle and price Ui Show Section */}
        <div className="p-1 w-full mt-4">
          <div className="flex justify-between items-center text-[14px] ">
            <span className="text-pink-500">Category VR GLasses</span>
            <div className="flex justify-center items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <h3 className="text-blue-500 text-[18px] hover:text-pink-500 duration-300 ease-in-out py-1">
            Headphones Model JHSKR Well Class Product
          </h3>
          <p className="text-[16px]"> $45.00 </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
