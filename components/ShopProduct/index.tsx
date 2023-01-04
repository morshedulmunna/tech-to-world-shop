import React from "react";
import Product from "./Product";
import Link from "next/link";

type Props = {};

const ShopProductAll = (props: Props) => {
  return (
    <div className="containers grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <Link href="/product/1">
          <Product />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <Link href="/product/1">
          <Product />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <Link href="/product/1">
          <Product />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <Link href="/product/1">
          <Product />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <Link href="/product/1">
          <Product />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <Link href="/product/1">
          <Product />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <Link href="/product/1">
          <Product />
        </Link>
      </div>
    </div>
  );
};

export default ShopProductAll;
