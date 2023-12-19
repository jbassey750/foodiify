import React, { useState } from "react";
import Input from "./func/input";
import Card from "./func/card" 
import pdata from "../product-data/data.json"

const Products = () => {

    // const getData = (carData) => {
    //     console.log(carData);
    // }

    const cards = (card, index) => {
        return <Card
         key={card.id} 
         name={card.name}
         price={card.price}
         rating={card.rating}
         category={card.category}
         image={card.image}
         addData={card}
          />
    }


    return (
        <>
            <div className="main">
                {/* <h1> product</h1> */}
                <Input />
                <div className="product-table">
                {pdata.map(cards)}
                </div>
            </div>
        </>
    )
}
export default Products