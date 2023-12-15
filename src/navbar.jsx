import React from "react";
import "./App.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <h1>Foodiify.</h1>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="/message">Message</Link></li>
                        <li>
                            <Link to="/Cart">cart</Link>
                            <sub className="product-pick">0</sub>
                        </li>
                        <li className="profile">
                            <Link to="/Profile">
                                <div className="active">
                                    <img src="./image/IMG_1681.JPG" alt="" />
                                    <div className="status"></div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Navbar