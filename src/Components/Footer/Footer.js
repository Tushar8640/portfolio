import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-coolGray-100 bg-blue-50 text-coolGray-900">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-col divide-coolGray-600">
    <h2 className="text-center font-bold text-4xl my-3">Follow Me</h2>
        <div className="flex flex-col justify-center pt-3 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/tusar-imran-680149227/"
              target="_blank"
              title="Linkedin"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  hover:bg-blue-300 text-white hover:text-black transition duration-300"
            >
            <img src="https://img.icons8.com/material-rounded/24/000000/linkedin--v1.png"/>
            </a>
            <a
              href="https://facebook.com/tushar.imran.357"
              target="_blank"
              title="facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  hover:bg-blue-300 text-white hover:text-black transition duration-300"
            >
         
         <img src="https://img.icons8.com/fluency-systems-filled/24/000000/facebook.png"/>
            </a>
            <a
              href="https://github.com/Tushar8640"
              target="_blank"
              title="GitHub"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  hover:bg-blue-300 text-white hover:text-black transition duration-300"
            >
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png"/>
            </a>
           
       
          </div>
          <div className="py-6 text-sm text-center text-coolGray-600">© 2021 Tusar Imran. All rights reserved.</div>

        </div>
      </div>
      {/* <HashLink to="#top">Link to Top of Page</HashLink> */}
    </footer>
  );
};

export default Footer;
