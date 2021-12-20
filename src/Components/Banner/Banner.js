import React from "react";
import resume from "../../Final-Resume-of-Tusar-Imran.docx-6 (1).pdf";

const Banner = () => {
  return (
    <section className="bg-blue-50 text-coolGray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-8 lg:flex-row lg:justify-around">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
          <h1 data-aos="zoom-in-down" className="text-5xl font-bold leading-none sm:text-6xl">
            Welcome <br />
            <span className="text-blue-600"> I am a Front-End Developer</span>
          </h1>
          <p data-aos="zoom-in-left" className="mt-6 mb-8 text-lg sm:mb-12">
            My Passion is learing and explorer
            <br className="hidden md:inline lg:hidden" /> Programming is the
            best thing to explorer nowdays
          </p>
          <div data-aos="zoom-in-up" className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href={resume}
              rel="noreferrer"
              target="_blank"
              download
              className="px-4 py-2 text-white font-semibold rounded bg-blue-600 text-coolGray-50"
            >
              Resume
            </a>
            <a
              href="#contact"
              rel="noreferrer"
              className="px-4 py-2 text-black font-semibold rounded  border-2 hover:bg-blue-600 hover:text-white transition duration-300  border-blue-600  text-coolGray-50"
            >
              Contact
            </a>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="flex items-center justify-center ">
          <img
            src="https://i.ibb.co/fNSwqdm/toppng-com-website-designing-and-software-development-company-675x717.png"
            alt=""
            className="h-3/5"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
