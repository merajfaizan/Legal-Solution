import React from "react";

const Review = ({review}) => {
  return (
    <div className=" bg-white my-4 p-5 rounded-lg">
      <div className="flex items-center space-x-4">
        <img className="w-10 h-10 rounded-full" src={review?.photo} alt="" />
        <div className="font-medium">
          <div>{review?.name ? review?.name : "user"}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {review.time}
          </div>
        </div>
      </div>
      <p className="p-5 text-justify">{review.reviewText}</p>
    </div>
  );
};

export default Review;
