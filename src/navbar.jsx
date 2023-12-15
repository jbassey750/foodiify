import React from "react";
import "./App.css"
const Navbar = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <h1>Foodiify.</h1>
                </div>

                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/product">Products</a></li>
                        <li><a href="/message">Message</a></li>
                        <li>
                            <a href="/Cart">cart</a>
                            <sub className="product-pick">0</sub>
                        </li>
                        <li className="profile">
                            <a href="/Profile">
                                <div className="active">
                                    <img src="./image/IMG_1681.JPG" alt="" />
                                    <div className="status"></div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar