import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ShopListLayout = (props: Props) => {
  return (
    <>
      <div className="containers">{props.children}</div>
    </>
  );
};

export default ShopListLayout;
