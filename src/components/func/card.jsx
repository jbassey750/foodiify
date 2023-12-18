import React from "react";

const Card = ({name, price, rating, category, image, ...props}) => {
    return (
        
        <div>
            <h2>{name}</h2>
            <img src={image} alt="cake" />
            <p>category: {category}</p>
            <p>rating: {rating}</p>
            <p>price: {price}</p>
        </div>
    )
}

export default Card 