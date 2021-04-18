import React from "react";
import spacex from "../assets/spacex.png";

export default function Navbar() {
    return(
        <nav className="navbar pt-5 justify-content-between">
            <img className="spacexlogo" alt="spacexlogo" src={spacex}></img>
            <span></span>
            <form className="form-inline">
                <button className="btn btn-round" type="button">
                    Vehicles
                </button>
            </form>
        </nav>
    )
}