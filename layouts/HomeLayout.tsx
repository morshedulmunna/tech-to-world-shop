import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";

type Props = {
  children: React.ReactElement;
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
