import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, imgURL, packageName } = service;
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={imgURL} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> {packageName} </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Link to={`/review/${_id}`}>
                <button className="btn btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
