import React from "react";

const Blog = () => {
  return (
    <section data-aos="zoom-in-right" className="container mx-auto bg-blue-50 py-6 sm:py-12 bg-coolGray-100 text-coolGray-800">
      <div className=" p-6  space-y-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">My Blogs</h2>
          <p className="font-serif text-sm ">
            I have passion to write blog on my free time
          </p>

        </div>
        <div className="grid grid-cols-1 gap-x-4  gap-y-8 md:grid-cols-2 lg:grid-cols-3">
       
          <article className="flex flex-col bg-coolGray-50">
            <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt=""
                className="object-cover w-full h-52 bg-coolGray-500"
                src="https://source.unsplash.com/202x202/?fashion"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-blue-600"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                <span>June 2, 2020</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-coolGray-50">
            <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt=""
                className="object-cover w-full h-52 bg-coolGray-500"
                src="https://source.unsplash.com/203x203/?fashion"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-blue-600"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                <span>June 3, 2020</span>
                <span>2.3K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-coolGray-50">
            <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img
                alt=""
                className="object-cover w-full h-52 bg-coolGray-500"
                src="https://source.unsplash.com/204x204/?fashion"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-blue-600"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                <span>June 4, 2020</span>
                <span>2.4K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
