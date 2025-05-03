import React from "react";
import { GiArrowWings } from "react-icons/gi";
import { Link } from "react-router";

const SingleNewsDetails = ({ newsData }) => {
  return (
    <div className="mx-auto w-4xl">
      <h1 className="text-xl font-bold mb-4">Dragon News</h1>
      <div className="card bg-base-100   shadow-sm">
        <figure>
          <img className="w-full" src={newsData?.image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{newsData?.title}</h2>
          <p>{newsData?.details}</p>
          <div className="card-actions justify-start">
            <Link
              to={`/category/${newsData?.category_id}`}
              className="btn bg-[#D72050] btn-primary border-0"
            >
              <GiArrowWings></GiArrowWings> All news in this category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsDetails;
