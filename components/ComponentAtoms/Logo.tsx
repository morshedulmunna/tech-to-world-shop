import React from "react";
import Image, { ImageProps } from "next/image";
import logoImg from "../../assets/logo.png";
import logowhite from "../../assets/logo-white.png";

interface Props {
  white: boolean;
}

const Logo = ({ white }: Props) => {
  return (
    <>
      {white ? (
        <Image src={logowhite} alt="Website Logo" width={150} />
      ) : (
        <Image src={logoImg} alt="Website Logo" width={150} />
      )}
    </>
  );
};

export default Logo;
