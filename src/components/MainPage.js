import React, { useContext } from "react";
import Hotel from "./Hotel";
import { hotelData } from "../../utils/hotelData.js";
import "../styles/MainPage.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { LoginContext } from "../Context/LoginContext";

function MainPage() {
    function handleSignOut() {
        // complete the signout functionality
    }

    return (
        <div>
            {/* Add a navbar here */}

            <div id="main">
                {hotelData.map((hotel) => (
                    <Hotel data={hotel} />
                ))}
            </div>
        </div>
    );
}

export default MainPage;
