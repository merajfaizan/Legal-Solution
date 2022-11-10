import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Review from "../Review/Review";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(Date());
  const service = useLoaderData();
  console.log(service);
  const reviews = service?.serviceReviews;
  console.log(service.serviceReviews);
  const navigate = useNavigate();

  // ? review adding method
  const addReview = (e) => {
    e.preventDefault();
    setDate(Date());
    if (user?.uid === undefined || user?.uid === null) {
      return navigate("/login");
    }
    const form = e.target;
    const review = {
      serviceId: service._id,
      uid: user?.uid,
      service: service?.serviceName,
      name: user?.displayName,
      photo: user?.photoURL,
      reviewText: form.review.value,
      time: date,
    };

    fetch("http://localhost:5000/addreview", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    form.reset();
  };

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

      {/* Review adding section */}
      <div className="p-3 w-2/3 mx-auto rounded-2xl bg-gray-100 mb-5">
        <form onSubmit={addReview}>
          <div>
            {user?.photoURL ? (
              <div className="flex items-center space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <div>{user?.displayName ? user?.displayName : "user"}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {date}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute -left-1 w-12 h-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="font-medium dark:text-white">
                  <div>{user?.displayName ? user?.displayName : "user"}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {Date()}
                  </div>
                </div>
              </div>
            )}
          </div>

          <label htmlFor="chat" className="sr-only">
            Add Review
          </label>
          <div className="flex items-center py-2 px-1 bg-gray-50 rounded-lg dark:bg-gray-700">
            <textarea
              id="chat"
              rows="2"
              name="review"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-firstColor focus:border-firstColor"
              placeholder="Your message..."
              required
            ></textarea>
            <button
              type="submit"
              className="inline-flex justify-center p-1 text-firstColor rounded-full cursor-pointer hover:bg-secondColor/20"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              <span className="sr-only">Add Review</span>
            </button>
          </div>
        </form>
      </div>
      {/* Review adding section END */}

      {/* all reviews */}
      <div className="px-5 py-3 w-2/3 mx-auto rounded-2xl bg-gray-100 mb-5">
        <h1 className="font-bold text-2xl my-3"> Reviews:</h1>
        {/* demo review */}
        {reviews.map((review, idx) => (
          <Review key={idx} review={review}></Review>
        ))}
        {/* demo end */}
      </div>
    </div>
  );
};

export default ServiceDetails;
