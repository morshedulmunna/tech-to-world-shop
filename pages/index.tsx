import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import Hero from "../components/Hero/Hero";
import SessionSale from "../components/sessionSale/SessionSale";
import ShopProductAll from "../components/ShopProduct";

type Props = {};

const index = (props: Props) => {
  return (
    <React.Fragment>
      <HomeLayout>
        <Hero />
        <SessionSale />
        <ShopProductAll />
      </HomeLayout>
    </React.Fragment>
  );
};

export default index;
