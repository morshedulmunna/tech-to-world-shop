import React from "react";
import { useRouter } from "next/router";
import ProductImage from "../ComponentAtoms/ProductImage";

type Props = {};

const SingleProduct = (props: Props) => {
  return (
    <>
      <div className="containers">
        <div className="flex justify-center flex-col md:flex-row my-12 gap-6 mx-6">
          {/* This is Product Image */}
          <div className=" w-full md:w-[50%] lg:w-[40%]">
            <ProductImage width={""} />
          </div>

          {/* Single Page product Items COntent */}
          <div className=" w-full md:w-[50%] lg:w-[60%]">
            <h3 className="text-[32px] text-blue-500 ">
              Headphones model XJKJ
            </h3>
            <p className="text-[20px] py-4 ">
              $ <span>345.00</span>
            </p>

            {/* This is Review Area in our Single Product Page */}
            <div className="py-4 flex items-center ">
              <span> ****** </span>
              <span className="text-[12px]"> (1 CUSTOMER REVIEW ) </span>
            </div>
            <p className="mb-6 text-[16px] text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              aliquid maiores aspernatur ipsa earum commodi quibusdam obcaecati
              porro. Ea et officiis nihil dignissimos aperiam ipsa pariatur
              iusto iste incidunt. Molestias. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Alias enim obcaecati incidunt neque
              quidem? Nisi, libero saepe ducimus voluptates quia consequatur
              quis exercitationem. Qui neque quae assumenda voluptatibus saepe
              earum.
            </p>

            {/* This is call to Action Button which part increase product Quantity */}
            <div>
              <button className="w-[50px] h-[40px] bg-gray-100 font-bold">
                -
              </button>{" "}
              <button className="w-[50px] pointer-events-none h-[40px] bg-gray-100 font-bold">
                1
              </button>{" "}
              <button className="w-[50px] h-[40px] bg-gray-100 font-bold">
                +
              </button>{" "}
            </div>

            {/* This is a Add to Cart Button When we click the button product go to the our add to cart component */}
            <button className="w-[150px] h-[50px] bg-pink-500 rounded-md hover:bg-pink-400 mt-12">
              Add to Cart
            </button>

            {/* Stock and category and tags */}
            <div className="flex flex-col space-y-4 mt-6 text-[12px]">
              <p>
                <span className="text-pink-500">Stock:</span> 09
              </p>
              <p>
                <span className="text-pink-500">Category:</span> VR GLASS
              </p>
              <p>
                <span className="text-pink-500">Tags:</span> TECH, Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
