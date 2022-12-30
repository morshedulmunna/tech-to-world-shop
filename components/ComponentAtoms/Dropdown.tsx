import Link from "next/link";
import React, { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { detectOutside } from "../../utils/directOutsideClick";

interface Props {
  label: String;
  dropMenu: {
    id: number;
    href: string;
    label: string;
  }[];
}

const Dropdown = ({ label, dropMenu }: Props) => {
  const ref: any = useRef();
  const [dropdownToggle, setDropdownToggle] = detectOutside(ref);

  return (
    <>
      <div
        onMouseEnter={() => setDropdownToggle(true)}
        onMouseLeave={() => setDropdownToggle(false)}
        ref={ref}
        className="md:relative"
      >
        {/* DropDown Label */}
        <div className="flex justify-center items-center cursor-pointer ">
          <span>{label}</span>
          <MdKeyboardArrowDown
            className={`${
              dropdownToggle
                ? "duration-300 ease-in-out"
                : "-rotate-90 duration-300 ease-in-out"
            }`}
          />
        </div>
        {/* Child Element   */}
        {dropdownToggle && (
          <ul className=" md:absolute z-10 md:bg-white md:w-full md:p-3  md:rounded-md lg:shadow-md ">
            {dropMenu.map((item) => (
              <li
                key={item.id}
                className="my-3 hover:text-pink-500 duration-300 ease-in-out w-fit mx-auto"
              >
                <Link href={item?.href}> {item?.label} </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
