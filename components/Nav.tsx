import Image from "next/image";
import React from "react";
import { Dribbble, Twitter } from "react-feather";

function Nav() {
  return (
    <div className="flex py-8 items-center justify-between">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={0}
        height={0}
        className="h-10 w-fit"
      />
      <Image
        src="/hamburger.svg"
        alt="Logo"
        width={24}
        height={24}
        className="h-6 w-6 md:hidden"
      />
      <div className="md:flex hidden items-center gap-x-4">
        <a href="#" className="text-dark-text">
          Work
        </a>
        <a href="#" className="text-dark-text">
          Info
        </a>
        <a href="#" className="text-dark-text">
          <Twitter color="#101010" />
        </a>
        <a href="#" className="text-dark-text">
          <Dribbble color="#101010" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
