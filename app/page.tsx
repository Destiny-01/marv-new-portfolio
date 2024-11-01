import CaseStudy from "@/components/CaseStudy";
import DesignExperience from "@/components/DesignExperience";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { caseStudies } from "@/data/caseStudies";
import { designExperiences } from "@/data/designExperiences";
import Image from "next/image";
import Link from "next/link";
import { Dribbble, Twitter } from "react-feather";

export default function Home() {
  return (
    <div className="bg-white px-5 md:px-32 w-full min-h-screen">
      <Nav />
      <div className="max-w-[100%] my-6 md:my-20">
        <h1 className="font-semibold text-dark-text text-[38px] leading-[45px] md:leading-[120pxb] md:text-8xl">
          Designing User- <br /> centered Products
        </h1>
        <div className="md:flex mt-6 gap-12">
          <p className="md:w-[400px] font-medium leading-5 md:leading-6 md:text-[21px]">
            I am a versatile Product Designer with a strong foundation in UX/UI
            design principles specializing in translating complex ideas into
            intuitive and visually engaging interfaces.
          </p>
          <div className="h-px w-full bg-body-text/50 my-6 md:hidden"></div>
          <p className="md:w-[450px]">
            My experience spans user research, wireframing, prototyping, and
            high-fidelity design, allowing me to deliver solutions that enhance
            user satisfaction and drive product success to exceed business
            expectations
          </p>
        </div>
      </div>
      <div className="md:my-12 my-10">
        <p className="text-lg md:text-[21px] text-dark-text font-medium">
          Featured Work
        </p>
        <div className="flex flex-col md:mt-8 mt-6 gap-6 md:gap-10">
          {designExperiences.map((experience, i) => (
            <DesignExperience key={i} {...experience} />
          ))}
        </div>
      </div>
      <div className="my-10 md:my-14" id="info">
        <h4 className="font-medium mb-8 text-xl md:text-2xl md:w-[536px]">
          I'm open to full time UX and Product Roles both Remote or based in
          Canada
        </h4>
        <p>Send an email on</p>
        <Link
          target="_blank"
          href="mailto:aigbeprecious100@gmail.com?subject=Job%20Inquiry"
          className="font-medium underline mb-1 text-xl md:text-2xl md:w-[536px]"
        >
          aigbeprecious100@gmail.com
        </Link>
      </div>
      <Footer />
    </div>
  );
}
