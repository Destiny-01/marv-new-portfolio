"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Nav() {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex relative py-8 items-center justify-between">
      <Link href="/#">
        <Image
          src="/logo1.svg"
          alt="Logo"
          width={0}
          height={0}
          className="h-10 w-fit"
        />
      </Link>
      <div className="p-1" ref={navRef} onClick={() => setShowNav(!showNav)}>
        <Image
          src="/hamburger.svg"
          alt="Logo"
          width={24}
          height={24}
          className="h-6 w-6 md:hidden"
        />
      </div>
      <div className="md:flex hidden items-center gap-x-4">
        <Link href="#works" className="text-dark-text">
          Work
        </Link>
        <Link href="#info" className="text-dark-text">
          Info
        </Link>
        <Link
          target="_blank"
          href="mailto:aigbeprecious100@gmail.com?subject=Job%20Inquiry"
        >
          <button className="border border-dark-text text-dark-text px-4 py-2 rounded text-base font-medium">
            Send a message
          </button>
        </Link>
      </div>
      {showNav && (
        <div className="bg-white absolute top-[75px] right-1 shadow-card-shadow p-4 flex flex-col rounded-lg gap-6">
          <Link href="#works" className="text-dark-text">
            Work
          </Link>
          <Link href="#info" className="text-dark-text">
            Info
          </Link>
          <Link target="_blank" href="mailto:aigbeprecious100@gmail.com">
            <button className="border border-dark-text text-dark-text px-4 py-2 rounded text-base font-medium">
              Send a message
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
