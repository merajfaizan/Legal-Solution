import React from "react";
import Header from "../Shared/Header/Header";

const Login = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-2 justify-center items-center">
        <form className="p-8 w-2/4 mx-auto shadow-xl rounded-lg border">
          <button
            type="button"
            className="text-firstColor w-full hover:text-white bg-white border border-firstColor hover:bg-secondColor/70  font-semibold rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-firstColor focus:border-secondColor block w-full p-2.5"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-firstColor focus:border-secondColor block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-secondColor hover:bg-firstColor focus:ring-4 focus:outline-none focus:ring-firstColor font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
        <img
          src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
