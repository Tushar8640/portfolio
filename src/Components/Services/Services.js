import React from "react";

const Services = () => {
  const frontEnd = [
    "Html",
    "CSS",
    "JavaScript",
    "React.js",
    "BootStrap",
    "Tailwind",
    "Material UI",
  ];
  const backEnd = ["Node.js", "Express.js"];
  const tools = ["Vs Code",
   "Crome dev tools",
   "git",
   "Adobe XD",
   "Figma",
  ];
  const database = ["Mongodb", "GitHub", "Netlify", "Heroku", "Firebase"];
  return (
    <div data-aos="zoom-in-left" id="skills" className="bg-blue-50">
      <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-xl text-left pr-16 mx-auto mb-10">
            <h5 className="mb-6 text-3xl font-bold leading-none">Services</h5>
            <p className="mb-6 text-gray-900">
              years of experience creating solutions to clients' website needs
              seeking employment at SmartWeb where I can combine my experience
              in building web portals, applications and ecommerce websites to
              bring unique attributes to the organization
            </p>
            <div className="flex">
              <a
                href="#contact"
                aria-label=""
                className=" px-4 py-2 bg-blue-600 text-white rounded font-semibold  duration-200  "
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
            <div className="">
              <h5 className="mb-6 text-3xl font-bold ">Skills</h5>

              <div className="">
                <h6 className="mb-2 font-semibold  ">Front-end</h6>
                <div className="text-sm flex flex-wrap text-gray-700 ">
                  {frontEnd.map((fe) => (
                    <p className="mr-2 shadow blur-lg  w-20  bg-gray-50 px-2 py-1 m-1 text-center">
                      {fe}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-16">
              <div className="">
                <h6 className="mb-2 font-semibold  ">Backend</h6>
                <div className="text-sm flex flex-wrap text-gray-700 ">
                  {backEnd.map((fe) => (
                    <p className="mr-2 shadow blur-lg  w-20  bg-gray-50 px-2 py-1 m-1 text-center">
                      {fe}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <h6 className="mt-8 font-semibold  ">Database & Deploy</h6>
                <div className="text-sm flex flex-wrap text-gray-700 ">
                  {database.map((fe) => (
                    <p className="mr-2 shadow blur-lg  w-20  bg-gray-50 px-2 py-1 m-1 text-center">
                      {fe}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="">
                <h6 className="mb-2 font-semibold  ">Tools</h6>
                <div className="text-sm flex flex-wrap text-gray-700 ">
                  {tools.map((fe) => (
                    <p className="mr-2 shadow blur-lg  w-20  bg-gray-50 px-2 py-1 m-1 text-center">
                      {fe}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
