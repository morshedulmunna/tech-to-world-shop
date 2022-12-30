import React, { JSXElementConstructor, ReactElement } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";

type Props = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

const HomeLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
