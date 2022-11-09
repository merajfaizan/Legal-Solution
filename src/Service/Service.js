import React, { useEffect, useState } from "react";

const Service = ({ service }) => {
  const [details, setDetails] = useState(service.about);

  useEffect(() => {
    const shortDetail = details.slice(0, 100) + "...";
    return setDetails(shortDetail);
  }, [details]);

  return (
    <div>
      <div className="p-3 shadow-lg rounded-2xl border border-x-firstColor border-y-orange-400">
        <img
          className="w-full h-64 object-cover rounded-xl mb-4"
          src={service.img}
          alt=""
        />
        <p className="text-3xl font-bold text-left">{service.serviceName}</p>
        <p className="text-lg text-left mt-5">
          <span className="font-semibold">About:</span>
          {details}
        </p>
        <div className="text-left">
          <button
            type="button"
            className="text-white bg-firstColor hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center my-5"
          >
            Show Details
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-between">
          <h2 className="text-left  text-xl my-3 font-bold">
            Rating: {service.ratings}
          </h2>
          <h2 className="text-left  text-xl my-3 font-bold">
            Price: {service.price}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
