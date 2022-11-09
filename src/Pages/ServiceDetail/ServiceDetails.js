import React from "react";
import { useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div>
      <h1 className="text-5xl text-center text-white bg-orange-400 font-bold border-2 border-firstColor shadow-xl p-5 rounded-xl capitalize mb-8">
        service Details.
      </h1>
      <div className="p-3 w-2/3 mx-auto rounded-2xl bg-gray-100 mb-5">
        <PhotoProvider>
          <PhotoView src={service.img}>
            <img
              className="w-full h-80 object-cover rounded-xl mb-4"
              src={service.img}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
        <p className="text-3xl font-bold text-left">{service.serviceName}</p>
        <p className="text-lg text-left mt-5">
          <span className="font-semibold">About: </span>
          {service.about}
        </p>
        <h2 className="text-left  text-xl my-3 font-bold">
          Rating: {service.ratings}
        </h2>
        <h2 className="text-left  text-xl my-3 font-bold">
          Price: {service.price}
        </h2>
      </div>
    </div>
  );
};

export default ServiceDetails;
