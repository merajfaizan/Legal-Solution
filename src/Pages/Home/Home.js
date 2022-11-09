import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lawyerHero from "../../Assets/Images/lawyer-hero.jpg";
import Service from "../../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="relative flex justify-center">
        <h1 className="absolute z-10 top-1/3 font-bold capitalize text-firstColor text-2xl md:text-5xl lg:text-5xl">
          welcome to legal solution
        </h1>
        <p className="absolute z-10 top-2/4 font-semibold capitalize text-center text-white lg:text-2xl md:text-2xl">
          Every Legal service you need for your business is here. <br />
          <span className="hidden lg:block md:block">
            I am Professional lawyer of business.
          </span>
        </p>
        <button
          type="button"
          className="absolute z-10 top-3/4  lg:top-2/3 md:top-2/3 text-white bg-gradient-to-r from-firstColor via-orange-400 to-secondColor hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          <Link to={"/services"}>Explore Services</Link>
        </button>

        <div className="absolute w-full h-full bg-gradient-to-tr from-black to-transparent"></div>
        <img
          className="w-full lg:h-560 object-cover"
          src={lawyerHero}
          alt="hero-sec"
        />
      </div>
      <div className="text-center my-8">
        <h1 className="text-5xl text-white bg-orange-400 font-bold border-2 border-firstColor shadow-xl p-5 rounded-xl capitalize mb-8">
          my services
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-5">
          {services?.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
        <Link to={"/services"}>
          <button
            type="button"
            className="btn bg-gray-800 w-64 text-firstColor font-bold hover:bg-transparent hover:transform hover:scale-125 hover:text-firstColor hover:border-2 hover:border-firstColor hover:transition hover:duration-200"
          >
            See More Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
