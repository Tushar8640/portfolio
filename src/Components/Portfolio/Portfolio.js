import React from "react";
import { Link } from "react-router-dom";

const Portfolio = ({ projects }) => {
  console.log(projects);
  return (
    <div 
      id="portfolio"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div></div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The </span>
          </span>{" "}
          Projects I Have Done
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div  className="grid gap-5  row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-1">
        {projects?.map((pj) => (
          <Link
            to={`portfolio/${pj.index}`}
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div
            data-aos="zoom-in-left"
              style={{ height: "550px" }}
              className="flex flex-col my-12  shadow "
            >
              <img
                src={pj.picture}
                className="object-cover w-full h-full"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-4">
                  <h6 className="mb-2 font-semibold leading-5">
                    {pj?.name}
                  </h6>
             
                  <button className="my-2 text-blue-700">See Details</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

