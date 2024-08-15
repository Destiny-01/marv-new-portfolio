import CaseStudy from "@/components/CaseStudy";
import DesignExperience from "@/components/DesignExperience";
import Nav from "@/components/Nav";
import { caseStudies } from "@/data/caseStudies";
import { designExperiences } from "@/data/designExperiences";
import Image from "next/image";
import { Dribbble, Twitter } from "react-feather";

export default function Home() {
  return (
    <div className="bg-white px-32 w-full min-h-screen">
      <Nav />
      <div className="max-w-[100%] my-20">
        <h1 className="font-semibold text-dark-text text-8xl">
          Designing For <br /> Web3 Companies
        </h1>
        <div className="flex mt-6 gap-12">
          <p className="w-[400px] font-medium text-[21px]">
            I&apos;m an experienced product designer with a keen interest in
            web3 particularly{" "}
            <span className="text-dark-text">Chain Abstraction</span> and how to
            improve the UX of the blockchain
          </p>
          <p className="w-[450px]">
            This interest has lead me to hours of research and deep dive into
            the ChA hemisphere to become very knowledgeable in the movement.
            I&apos;ve also led design teams for Web2 companies and now I&apos;m
            eager to bring my experience to the Chain Abstraction ecosystem
          </p>
        </div>
      </div>
      <div className="my-12">
        <p className="text-[21px] text-dark-text font-medium">
          Chain Abstraction Explorations
        </p>
        <div className="grid gap-8 grid-cols-2 mt-8">
          {caseStudies.map((study, i) => (
            <CaseStudy key={i} {...study} />
          ))}
        </div>
      </div>
      <div className="my-12">
        <p className="text-[21px] text-dark-text font-medium">
          Other Design Experiences
        </p>
        <div className="flex mt-8 gap-10 flex-col">
          {designExperiences.map((experience, i) => (
            <DesignExperience key={i} {...experience} />
          ))}
        </div>
      </div>
      <div className="my-14">
        <h4 className="font-medium mb-8 text-2xl w-[536px]">
          I&apos;m open to full time UX and Product Roles preferably in the
          Chain Abstraction Ecosystem
        </h4>
        <p>Send an email on</p>
        <h4 className="font-medium mb-1 text-2xl w-[536px]">
          aigbemarvellous01@gmail.com
        </h4>
      </div>
      <Nav />
    </div>
  );
}
