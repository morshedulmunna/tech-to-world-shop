import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

type Props = {};

const AddToCart = (props: Props) => {
  //   const [offset, setOffset] = useState(0);
  //   const [itemShow, setItemShow] = useState(false);

  //   useEffect(() => {
  //     const onScroll = () => setOffset(window.pageYOffset > 570 ? 570 : 0);
  //     // clean up code
  //     window.removeEventListener("scroll", onScroll);
  //     window.addEventListener("scroll", onScroll, { passive: true });
  //     return () => window.removeEventListener("scroll", onScroll);
  //   }, []);

  return (
    <div
      onClick={() => console.log(" add to Card")}
      className="top-[20%] right-0 fixed cursor-pointer"
    >
      <div className="bg-pink-500 flex justify-center relative items-center p-2 space-x-2 rounded-md">
        <FaShoppingCart size={30} color="white" />
        <p className="bg-blue-500  text-white font-bold absolute -top-2 min-w-[50%] flex justify-center items-center min-h-[50%] right-7 px-1 rounded-full">
          <span>3</span>
        </p>
      </div>
    </div>
  );
};

export default AddToCart;
