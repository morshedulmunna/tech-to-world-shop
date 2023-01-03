import { useRouter } from "next/router";
import React from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import Button from "../../components/ComponentAtoms/Button";

type Props = {};

const SingleProductPage = (props: Props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <SingleProduct />

      {/* Button Actions */}

      <div></div>
    </>
  );
};

export default SingleProductPage;
