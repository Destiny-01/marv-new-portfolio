import { ICaseStudy } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Twitter } from "react-feather";

function CaseStudy({ title, description, image, color, link }: ICaseStudy) {
  return (
    <div
      className={`bg-[${color}] w-full md:p-8 p-6 rounded-lg`}
      style={{ backgroundColor: color }}
    >
      <img
        src={image}
        alt={title}
        width={0}
        height={0}
        className="w-full h-fit rounded-md"
      />
      <div>
        <p className="text-[21px] mt-4 mb-1 text-dark-text font-medium">
          {title}
        </p>
        <p>{description}</p>
        {link ? (
          <Link
            target="_blank"
            href={link}
            className="flex gap-2 mt-4 items-center"
          >
            <p className="text-dark-text font-medium">Read More on Twitter</p>
            <Twitter color="#101010" size={16} />
          </Link>
        ) : (
          <p className="text-dark-text mt-4 font-medium">Coming soon...</p>
        )}
      </div>
    </div>
  );
}

export default CaseStudy;
