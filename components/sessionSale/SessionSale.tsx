import React from "react";
import bgImage from "../../assets/product/bgse.png";
import Image from "next/image";
import Button from "../ComponentAtoms/Button";

type Props = {};

const SessionSale = (props: Props) => {
  return (
    <div className="mx-6">
      <div className="containers bg-gray-100 my-12 py-12  rounded-md  px-4">
        <div className="flex justify-around items-center flex-col lg:flex-row">
          <div>
            <h3 className="text-blue-500 text-[35px]">
              Season Finale Sale <span className="text-red-500">2023</span>{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
              iure.
            </p>
          </div>
          <Image src={bgImage} alt={"Images"} />
          <Button
            type={undefined}
            label={"Read More"}
            className={"w-[200px] py-4 bg-red-500 hover:bg-red-400"}
            variant={"primary"}
            onClick={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default SessionSale;
