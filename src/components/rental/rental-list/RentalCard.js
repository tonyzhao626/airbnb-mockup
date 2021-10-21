import React from "react";
import { Link } from "react-router-dom";
import { rentalType } from "helpers";

const RentalCard = ({ colNum, rental }) => (
  <div className={colNum} style={{ marginBottom: "15px" }}>
    <Link className="rental-detail-link" to={`/rentals/${rental._id}`}>
      <div className="card bwm-card">
        <img src={rental.image} alt={rental.title} className="card-img-top" />
        <div className="card-block">
          <h6 className={`card-subtitle ${rental.category}`}>
            {rentalType(rental.shared)} {rental.category} &#183; {rental.city}
          </h6>
          <h4 className="card-title">{rental.title}</h4>
          <p className="card-text">
            ${rental.dailyRate} per night &#183; Free Cancelation
          </p>
          <div href="" className="card-link">
            More Info
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default RentalCard;
