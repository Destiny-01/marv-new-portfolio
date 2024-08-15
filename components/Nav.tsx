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
      <div className="flex items-center gap-x-4">
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
