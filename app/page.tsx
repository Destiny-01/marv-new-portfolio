import CaseStudy from "@/components/CaseStudy";
import DesignExperience from "@/components/DesignExperience";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { caseStudies } from "@/data/caseStudies";
import { designExperiences } from "@/data/designExperiences";
import Image from "next/image";
import { Dribbble, Twitter } from "react-feather";

export default function Home() {
  return (
    <div className="bg-white px-5 md:px-32 w-full min-h-screen">
      <Nav />
      <div className="max-w-[100%] my-6 md:my-20">
        <h1 className="font-semibold text-dark-text text-[38px] leading-[45px] md:leading-[120pxb] md:text-8xl">
          Designing For <br /> Web3 Companies
        </h1>
        <div className="md:flex mt-6 gap-12">
          <p className="md:w-[400px] font-medium text-lg leading-5 md:leading-6 md:text-[21px]">
            I&apos;m an experienced product designer with a keen interest in
            web3 particularly{" "}
            <span className="text-dark-text">Chain Abstraction</span> and how to
            improve the UX of the blockchain
          </p>
          <div className="h-px w-full bg-body-text/50 my-6 md:hidden"></div>
          <p className="md:w-[450px]">
            This interest has lead me to hours of research and deep dive into
            the ChA hemisphere to become very knowledgeable in the movement.
            I&apos;ve also led design teams for Web2 companies and now I&apos;m
            eager to bring my experience to the Chain Abstraction ecosystem
          </p>
        </div>
      </div>
      <div className="md:my-12 my-10">
        <p className="text-lg md:text-[21px] text-dark-text font-medium">
          Chain Abstraction Explorations
        </p>
        <div className="grid md:gap-8 gap-6 md:grid-cols-2 grid-cols-1 md:mt-8 mt-6">
          {caseStudies.map((study, i) => (
            <CaseStudy key={i} {...study} />
          ))}
        </div>
      </div>
      <div className="md:my-12 my-10">
        <p className="text-lg md:text-[21px] text-dark-text font-medium">
          Other Design Experiences
        </p>
        <div className="flex flex-col md:mt-8 mt-6 gap-6 md:gap-10">
          {designExperiences.map((experience, i) => (
            <DesignExperience key={i} {...experience} />
          ))}
        </div>
      </div>
      <div className="my-10 md:my-14">
        <h4 className="font-medium mb-8 text-xl md:text-2xl md:w-[536px]">
          I&apos;m open to full time UX and Product Roles preferably in the
          Chain Abstraction Ecosystem
        </h4>
        <p>Send an email on</p>
        <h4 className="font-medium mb-1 text-xl md:text-2xl md:w-[536px]">
          aigbemarvellous01@gmail.com
        </h4>
      </div>
      <Footer />
    </div>
  );
}
