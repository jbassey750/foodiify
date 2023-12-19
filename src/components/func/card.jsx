import React, { useState } from "react";

const Card = ({name, price, rating, category, image, addData, ...props}) => {

    const [isData, setData] = useState([])
    console.log(isData);

    const loadData = () => {
        console.log(addData);
        setData([...isData, addData])
    }

    return (
        
        <div onClick={loadData} className="sub-card">
            <h2>{name}</h2>
            <img src={image} alt="cake" />
            <p>category: {category}</p>
            <p>rating: {rating}</p>
            <p>price: {price}</p>
        </div>
    )
}

export default Card 