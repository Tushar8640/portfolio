import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const [detailsData, setDetailsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/details.json")
      .then((res) => res.json())
      .then((data) => setDetailsData(data));
  }, []);
  console.log(detailsData);
  const detail = detailsData.find((detail) => id == detail.index);
  console.log(detail);
  return (
    <section className="bg-coolGray-100 my-12 text-coolGray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="">
          <img
            src={detail?.picture}
            alt=""
            className="object-cover w-full  rounded "
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {detail?.name}
            </h3>
            <span className="text-xs text-coolGray-600">February 19, 2021</span>
            <ul>
              <li>
                <p className="flex text-xl">
                  {" "}
                  <span className="mr-3 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>{" "}
                  {detail?.details1}
                </p>
              </li>
              <li>
                <p className="flex text-xl">
                  {" "}
                  <span className="mr-3 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>{" "}
                  {detail?.details2}
                </p>
              </li>
              <li>
                <p className="flex text-xl">
                  {" "}
                  <span className="mr-3 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>{" "}
                  {detail?.details3}
                </p>
              </li>
            </ul>
          </div>
          <h5 className="text-2xl font-bold">
            Techonlogy Used : {detail?.technology}
          </h5>
          <div>
            <p>
              <a className="underline mr-3 text-blue-600 " href={detail?.livesite}  target="_blank">
                Live Site
              </a>
              <a className="underline mr-3 text-blue-600 " href={detail?.github1} target="_blank">
                Github Client
              </a>
              <a className="underline text-blue-600 " href={detail?.github2} target="_blank">
                Github Server
              </a>
            </p>
          </div>
        </div>

        <div className="flex justify-center"></div>
      </div>
    </section>
  );
};

export default ProjectDetails;
