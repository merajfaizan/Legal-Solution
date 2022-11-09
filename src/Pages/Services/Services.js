import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../../Service/Service";

const Services = () => {
  const allservices = useLoaderData();
  return (
    <div className="text-center my-8">
      <h1 className="text-5xl text-white bg-orange-400 font-bold border-2 border-firstColor shadow-xl p-5 rounded-xl capitalize mb-8">
        my services
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-5">
        {allservices?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
