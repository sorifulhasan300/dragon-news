import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold text-gray-600">Find Us On</h1>
      <div className="join join-vertical w-full mt-5">
        <button className="btn join-item bg-white justify-start ">
          <FaFacebook size={20}></FaFacebook> Facebook
        </button>
        <button className="btn join-item bg-white justify-start ">
          <FaTwitter size={20} /> Twitter
        </button>
        <button className="btn join-item bg-white justify-start">
          <FaInstagram size={20} /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
