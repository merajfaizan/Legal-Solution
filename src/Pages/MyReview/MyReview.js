import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import CustomeReview from "../CustomReview/CustomeReview";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  const [userDetails, setUserDetails] = useState([]);
  const reviews = userDetails?.userReview;

  useEffect(() => {
    fetch(`https://ligal-solution-server.vercel.app/myreview/${uid}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data));
  }, []);

  return (
    <div className="px-5 py-3 w-2/3 mx-auto rounded-2xl bg-gray-100 mb-5">
      {reviews?.map((review, idx) => (
        <CustomeReview key={idx} review={review}></CustomeReview>
      ))}
    </div>
  );
};

export default MyReview;
