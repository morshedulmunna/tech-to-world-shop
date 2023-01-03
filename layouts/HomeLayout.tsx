import React, { JSXElementConstructor, ReactElement } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const HomeLayout = (props: Props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default HomeLayout;
