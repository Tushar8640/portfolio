import React from "react";

const About = () => {
  return (
    <div
    data-aos="zoom-in-left"
      id="about"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="w-3/4">
          <img
            data-aos="zoom-in-up"
            className="object-cover w-full h-full rounded shadow-lg "
            src="https://i.ibb.co/wNr46h9/Wordpress-dev.jpg"
            alt=""
          />
        </div>

        <div data-aos="zoom-in-left" className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              About Me
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Creative and technical web development professional with years of
              experience looking for a position with Webscape Tech where I can
              enhance my knowledge of design principles and grow with the
              organization.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 border-blue-600 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border  border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold ">
                  I'll be sure to note that in my log
                </h6>
                <p className="text-sm text-gray-900">
                  Lookout flogging bilge rat main sheet bilge water nipper fluke
                  to go on account heave down.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 border-blue-600 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  A business big enough that it could be listed
                </h6>
                <p className="text-sm text-gray-900">
                  Those options are already baked in with this model shoot me an
                  email clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
