import React, { useEffect, useRef, useState } from "react";
import Logo from "../ComponentAtoms/Logo";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Dropdown from "../ComponentAtoms/Dropdown";
import Button from "../ComponentAtoms/Button";
import { detectOutside } from "../../utils/directOutsideClick";

type Props = {};

const Navbar = (props: Props) => {
  const ref: any = useRef();

  const [navToggle, setNavToggle] = detectOutside(ref);

  return (
    <div className="sticky top-0 z-20 bg-white">
      <div ref={ref} className=" shadow-sm relative  md:h-full ">
        <div className="flex justify-center items-center bg-white md:containers">
          <div className="flex justify-between items-center w-full px-4 py-4 z-20 ">
            <Logo white={false} />
            <FaBars
              onClick={() => setNavToggle(!navToggle)}
              className="cursor-pointer md:hidden"
              size={20}
            />
          </div>

          {/* Large Device Nav Item */}

          <ul className="hidden md:block">
            <div className="flex justify-center items-center space-x-12">
              {navItem.map((item) => {
                if (typeof item.label === "object") {
                  return (
                    <li key={item.id} className={` duration-300 ease-in-out `}>
                      <Dropdown
                        label={item.label.label}
                        dropMenu={item.label.dropMenu}
                      />
                    </li>
                  );
                }
                return (
                  <li
                    key={item.id}
                    className={`duration-300 ease-in-out  
                "hover:bg-pink-500 rounded-md"} whitespace-nowrap hover:text-pink-500`}
                  >
                    <Link href={item.href as string}> {item.label} </Link>
                  </li>
                );
              })}
              <Button
                label="Login"
                onClick={() => console.log("button Click")}
                type={"button"}
                className={""}
                variant="primary-outline"
              />
            </div>
          </ul>
        </div>

        {/* Mobile Toggle Nav Items */}
        <ul
          className={` absolute top-[54px] bg-gray-100 p-2 w-full text-center md:hidden z-10 shadow-md ${
            navToggle
              ? "right-0 duration-300 ease-linear "
              : "-right-[100%] duration-300 ease-out "
          }  `}
        >
          {navItem.map((item) => {
            if (typeof item.label === "object") {
              return (
                <li key={item.id} className={` duration-300 ease-in-out `}>
                  <Dropdown
                    label={item.label.label}
                    dropMenu={item.label.dropMenu}
                  />
                </li>
              );
            }
            return (
              <li
                key={item.id}
                className={` duration-300 ease-in-out  my-6 ${
                  item.id !== 2
                    ? "hover:text-pink-500 w-fit mx-auto px-6 py-1 rounded-md"
                    : null
                }`}
              >
                <Link href={item?.href as string}> {item?.label} </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

const navItem = [
  {
    id: 0,
    href: "/",
    label: "Home",
  },
  {
    id: 1,
    href: "/shop",
    label: "Shop",
  },
  {
    id: 2,
    label: {
      label: "Category",
      dropMenu: [
        {
          id: 0,
          href: "/phone",
          label: "Phone",
        },
        {
          id: 1,
          href: "/laptop",
          label: "Laptop",
        },
        {
          id: 2,
          href: "/watch",
          label: "Watch",
        },
      ],
    },
  },
  {
    id: 3,
    href: "/about-us",
    label: "About Us",
  },
];
