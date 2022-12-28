import React from "react";
import Logo from "../ComponentAtoms/Logo";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialTumbler,
  TiSocialInstagram,
  TiSocialPinterestCircular,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsFillTelephoneFill, BsFillPinAngleFill } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Button from "../ComponentAtoms/Button";
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="bg-blue-900 px-4 py-12 w-full text-white">
        <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 containers">
          <div className="col-span-12 md:col-span-6 lg:col-span-3  ">
            <Logo white />
            <p className="text-white  mt-4 leading-5 max-w-sm py-2 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
            </p>
            {/* social Link */}
            <div className="social-limk">
              <ul className="flex space-x-4 mt-2">
                {FooterData?.socialNav?.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="bg-white rounded-full p-1 hover:bg-pink-500 duration-300 ease-in-out"
                    >
                      <Link href={item?.href}>{item?.item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 ">
            <h3 className="my-4">Contact Info</h3>
            <ul>
              {FooterData.contactInfo.map((info) => (
                <li key={info.id} className="flex items-center space-x-2 py-1">
                  <span>{info.icon}</span>
                  <p> {info.label} </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h3 className="py-3">Latest News</h3>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              deiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim minim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aspernatur tempora eaque itaque cum accusamus quae veritatis
              libero voluptatibus non nobis.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h3 className="py-3">Newsletter</h3>
            <form action="#">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full text-black mb-2"
              />
              <Button
                type="submit"
                label="Subscribe"
                className="mb-2"
                variant="primary"
                onClick={undefined}
              />
            </form>
            <p>Get latest news and promotins direct in your inbox!</p>
          </div>
        </div>
      </footer>
      <div className="bg-blue-900 bg-opacity-90 text-[10px] md:text-[12px] text-center text-white px-4 py-1">
        <span>© 2022 develop morshedulmunna, All Rights Reserved</span>
      </div>
    </>
  );
};

export default Footer;

// item social

const FooterData = {
  socialNav: [
    {
      id: 0,
      item: <TiSocialFacebook color="blue" size={20} />,
      href: "#",
    },
    {
      id: 1,
      item: <TiSocialInstagram color="blue" size={20} />,
      href: "#",
    },
    {
      id: 2,
      item: <TiSocialPinterestCircular color="blue" size={20} />,
      href: "#",
    },
    {
      id: 3,
      item: <TiSocialTwitter color="blue" size={20} />,
      href: "#",
    },
  ],
  contactInfo: [
    {
      id: 0,
      icon: <BiTimer size={16} className="text-pink-500" />,
      label: "Monday to Friday: 9:00 - 20:00",
    },
    {
      id: 1,
      icon: <BsFillPinAngleFill size={16} className="text-pink-500" />,
      label: "Saturday to Sunday: closed",
    },
    {
      id: 2,
      icon: <MdEmail size={16} className="text-pink-500" />,
      label: "softwerk@example.com",
    },
    {
      id: 3,
      icon: <BsFillTelephoneFill size={16} className="text-pink-500" />,
      label: "+ 381 8367 545 575",
    },
  ],
};
