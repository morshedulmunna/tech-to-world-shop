import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AddToCart from "../components/AddToCart/AddToCart";
type Props = {
  children: JSX.Element | JSX.Element[];
};

const GlobalLayout = (props: Props) => {
  return (
    <div className="relative">
      <Navbar />
      <div>{props.children}</div>
      <AddToCart />
      <Footer />
    </div>
  );
};

export default GlobalLayout;
