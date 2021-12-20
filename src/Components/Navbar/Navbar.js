import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Navbar({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2 sticky shadow-lg">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-lightBlue-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <Link
                  to="/"
                  className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blue-600"
                >
                  Tushar
                </Link>
                <button
                  className="text-blue-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {!menuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <HashLink
                      to="/#about"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                    >
                      About Me
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      to="/#skills"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                    >
                      Skills
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      to="/#portfolio"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                    >
                      Portfolio
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/blog"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      to="/#contact"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-600 hover:opacity-75"
                    >
                      Contact Me
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
