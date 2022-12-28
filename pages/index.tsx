import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import Hero from "../components/Hero/Hero";

type Props = {};

const index = (props: Props) => {
  return (
    <React.Fragment>
      <HomeLayout>
        <Hero />
      </HomeLayout>
    </React.Fragment>
  );
};

export default index;
