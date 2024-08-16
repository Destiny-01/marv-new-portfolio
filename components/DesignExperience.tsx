"use client";

import { IDesignExperience } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { act, useState } from "react";
import { ChevronLeft, ChevronRight, Twitter } from "react-feather";

function DesignExperience({
  project,
  role,
  description,
  images,
  color,
  link,
}: IDesignExperience) {
  const [activeIndex, setActiveIndex] = useState(0);

  const transitionLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const transitionRight = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={`bg-[${color}] w-full md:p-8 p-6 rounded-lg`}
      style={{ backgroundColor: color }}
    >
      <div className="relative w-full flex overflow-hidden mb-8">
        {images.map((image, i) => {
          //   if (position < -100 * (images.length - 1)) {
          //     position += 100 * images.length;
          //   } else if (position > 100 * (images.length - 1)) {
          //     position -= 100 * images.length;
          //   }

          return (
            <div
              key={i}
              className={`h-[100%] w-[100%] flex-shrink-0 transition duration-500 ease-in-out transform ${
                i === activeIndex ? "scale-100" : "scale-90"
              }`}
              style={{ transform: `translateX(${i * 100}%)` }}
            >
              <img
                src={image}
                alt={project}
                width={0}
                height={0}
                className="w-full h-fit rounded-md"
              />
            </div>
          );
        })}
        <div
          onClick={transitionLeft}
          className="absolute rounded-full left-4 opacity-30 bg-[#808080] top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center"
        >
          <ChevronLeft color="#ffffff" />
        </div>
        <div
          onClick={transitionRight}
          className="absolute rounded-full right-4 opacity-30 bg-[#808080] top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center"
        >
          <ChevronRight color="#ffffff" />
        </div>
        <div className="absolute px-4 py-3 rounded-full round bottom-4 opacity-30 bg-[#808080] left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full bg-white ${
                i !== activeIndex ? "opacity-30" : "opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-dark-text">Project:</p>
            <p className="text-dark-text">Role:</p>
            <p className="text-dark-text">Live Link:</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-body-text">{project}</p>
            <p className="text-body-text">{role}</p>
            <Link href={link} className="text-dark-text underline">
              {link}
            </Link>
          </div>
        </div>
        <p className="max-w-[500px] mt-6 md:mt-0 text-base">{description}</p>
      </div>
    </div>
  );
}

export default DesignExperience;
