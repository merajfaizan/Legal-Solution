import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lawyerHero from "../../Assets/Images/lawyer-hero.jpg";
import Service from "../../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data), setSpinner(false));
  }, []);
  return (
    <div>
      {/* bannar section */}
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
      {/* my services section */}
      <div className="text-center my-8">
        <h1 className="text-5xl text-firstColor bg-gray-800 font-bold border-2 border-firstColor shadow-xl p-5 rounded-xl capitalize mb-8">
          my services
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-5 relative">
          {spinner ? (
            <div className="absolute left-2/4" role="status">
              <svg
                className="inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-firstColor"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <></>
          )}
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
      {/* about me */}
      <div className="text-center my-8">
        <h1 className="text-5xl text-firstColor bg-gray-800 font-bold border-2 border-firstColor shadow-xl p-5 rounded-xl capitalize mb-8">
          About Me
        </h1>
        <div className="hero bg-base-200">
          <div className="flex flex-col lg:flex-row">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className=" lg:w-1/3 lg:mr-9 h-480 object-cover rounded-lg shadow-2xl"
              alt=""
            />
            <div className="lg:w-2/3 text-left p-4">
              <h1 className="text-5xl mt-4 lg:mt-7 font-bold">HI, I'm Alex </h1>
              <p className="py-6 text-2xl font-semibold capitalize">
                I am Professional lawyer expertise in business and agreements. i
                have 10+ years of experience and also i am worked with 100+
                clients over the world.
              </p>
              <p className="text-lg font-semibold capitalize">
                <span className="text-xl font-semibold">Education:</span> LL.B
                (Hon's)Completed From Stamford University Of Bangladesh
              </p>
              <p className="text-lg font-semibold capitalize">
                <span className="text-xl font-semibold">Language:</span> bangla
                , english, urdu, hindi.
              </p>
              <p className="text-lg font-semibold capitalize">
                <span className="text-xl font-semibold">Specialization:</span>{" "}
                Registration Law , labour law , tax law , etc.
              </p>
              <p className="text-lg font-semibold capitalize">
                <span className="text-xl font-semibold">Practice Courts:</span>{" "}
                supreme court of Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* career section */}
      <h1 className="text-5xl text-center text-firstColor bg-gray-800 font-bold border-2 border-firstColor shadow-xl p-5 rounded-xl capitalize mb-8">
        My career
      </h1>
      <div className="bg-base-200 text-center mb-8 rounded-lg p-8 flex flex-col lg:flex-row justify-around">
        <div className="flex flex-col w-40 bg-white p-5 rounded-xl border border-firstColor">
          <h1 className="text-2xl font-bold">10+ Years</h1>
          <p className="text-xl font-semibold">Experience</p>
        </div>
        <div className="flex flex-col  w-40 bg-white p-5 rounded-xl border border-firstColor">
          <h1 className="text-2xl font-bold">100+</h1>
          <p className="text-xl font-semibold">Clients</p>
        </div>
        <div className="flex flex-col  w-40 bg-white p-5 rounded-xl border border-firstColor">
          <h1 className="text-2xl font-bold">20+</h1>
          <p className="text-xl font-semibold">Country's</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
