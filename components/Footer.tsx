import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Dribbble, Twitter } from "react-feather";

function Footer() {
  return (
    <div className="flex w-full flex-col md:flex-row py-8 gap-8 md:items-center justify-between">
      <Link href="/#">
        <Image
          src="/logo1.svg"
          alt="Logo"
          width={0}
          height={0}
          className="h-10 w-fit"
        />
      </Link>
      <div className="flex justify-between md:justify-start items-center gap-x-4">
        <Link href="#works" className="text-dark-text font-medium">
          Work
        </Link>
        <Link href="#info" className="text-dark-text font-medium">
          Info
        </Link>
        <Link
          target="_blank"
          href="https://x.com/vello01"
          className="text-dark-text font-medium"
        >
          <Twitter color="#101010" size={20} />
        </Link>
        {/* <a href="#" className="text-dark-text font-medium">
          <Dribbble color="#101010" size={20} />
        </a> */}
      </div>
    </div>
  );
}

export default Footer;
