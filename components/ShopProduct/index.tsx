import React from "react";
import Product from "./Product";

type Props = {};

const ShopProductAll = (props: Props) => {
  return (
    <div className="containers grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <Product />
      </div>
    </div>
  );
};

export default ShopProductAll;
