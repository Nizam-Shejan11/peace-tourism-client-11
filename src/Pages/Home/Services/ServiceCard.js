import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { _id, imgURL, packageName } = service;
  return (
    <div className="service-card card mb-12 bg-base-100 shadow-xl">
      <figure className="card-image-holder px-10 pt-10">
        <img
          src={imgURL}
          alt="Shoes"
          className="service-card-image rounded-xl"
        />
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
  );
};

export default ServiceCard;
