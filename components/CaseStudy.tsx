import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Twitter } from "react-feather";

function CaseStudy({ title, description, image, color, link }: ICaseStudy) {
  return (
    <div
      className={`bg-[${color}] w-full p-8 rounded-lg`}
      style={{ backgroundColor: color }}
    >
      <Image
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
        <Link href={link} className="flex gap-2 mt-4 items-center">
          <p className="text-dark-text font-medium">Read More on Twitter</p>
          <Twitter color="#101010" size={16} />
        </Link>
      </div>
    </div>
  );
}

export default CaseStudy;