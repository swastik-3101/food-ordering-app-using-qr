import React from "react";
import "../styles/Card.css";

const Card = ({ title, image, rating, cuisine, deliveryTime }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3>{title}</h3>
                <p>Cuisine: {cuisine}</p>
                <p>Delivery Time: {deliveryTime} mins</p>
                <p>Rating: ⭐ {rating}</p>
            </div>
        </div>
    );
};

export default Card;