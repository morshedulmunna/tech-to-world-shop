import React, { MouseEventHandler } from "react";

type Props = {
  type: string | undefined;
  label: String | null;
  className: String | null;
  variant: "primary" | "secondary" | any;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

class ButtonStyle {
  variant: string | null;
  type: string | undefined;

  constructor(variant: string, type: string | undefined) {
    this.variant = variant;
    this.type = type;
  }

  addVariant() {
    switch (this.variant) {
      case "primary":
        return `bg-blue-500 text-white font-semibold px-4 hover:bg-blue-400 duration-500 each-in-out`;

      case "primary-outline":
        return `border border-blue-500 text-black font-semibold px-4 hover:bg-blue-400 hover:text-white duration-500 each-in-out`;

      default:
        return ``;
    }
  }
}

const Button = ({ type, label, className, variant, onClick }: Props) => {
  const buttonStyle = new ButtonStyle(variant, type);
  return (
    <button
      onClick={onClick}
      className={`w-full py-1 rounded-md px-2 ${className} ${buttonStyle.addVariant()} `}
    >
      {label}
    </button>
  );
};

export default Button;
