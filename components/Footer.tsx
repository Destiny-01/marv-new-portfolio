import Image from "next/image";
import React from "react";
import { Dribbble, Twitter } from "react-feather";

function Footer() {
  return (
    <div className="flex w-full flex-col md:flex-row py-8 gap-8 md:items-center justify-between">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={0}
        height={0}
        className="h-10 w-fit"
      />
      <div className="flex justify-between md:justify-start items-center gap-x-4">
        <a href="#" className="text-dark-text font-medium">
          Work
        </a>
        <a href="#" className="text-dark-text font-medium">
          Info
        </a>
        <a href="#" className="text-dark-text font-medium">
          <Twitter color="#101010" size={20} />
        </a>
        <a href="#" className="text-dark-text font-medium">
          <Dribbble color="#101010" size={20} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
