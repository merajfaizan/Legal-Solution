import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const addService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form?.serviceName.value;
    const img = form?.img.value;
    const about = form?.about.value;
    const ratings = form?.ratings.value;
    const price = form?.price.value;
    const serviceReviews = [];
    const service = { serviceName, img, about, ratings, price, serviceReviews };

    fetch("https://ligal-solution-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    form.reset();

    toast.success("Service Successfully added.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <form
      onSubmit={addService}
      className="w-2/3 mx-auto rounded-xl shadow-lg p-5 my-5 bg-base-200"
    >
      <div className="mb-6">
        <label
          htmlFor="serviceName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Service Name
        </label>
        <input
          type="text"
          id="serviceName"
          name="serviceName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Business Agreement"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="img"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Image URL
        </label>
        <input
          type="text"
          id="img"
          name="img"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="URL here"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="about"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          About
        </label>
        <input
          type="text"
          id="about"
          name="about"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="About..."
          required
        />
      </div>
      <div className="flex">
        <div className="mb-6 w-full mr-2">
          <label
            htmlFor="ratings"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Ratings
          </label>
          <input
            type="text"
            id="ratings"
            name="ratings"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="4.9 / 5 etc."
            required
          />
        </div>
        <div className="mb-6 w-full ml-2">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="100$"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-firstColor hover:bg-secondColor/70 focus:ring-4 focus:outline-none focus:ring-firstColor font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
      <ToastContainer />
    </form>
  );
};

export default AddService;
