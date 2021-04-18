import React from "react";
import spacex from "../assets/spacex.png";

export default function Navbar() {

    const openRepo = () => {
        const url = "https://github.com/apnordin/Myxx-Code-Challenge"
        window.open(url, "_blank");
    }
    
    return(
        <nav className="navbar pt-5 justify-content-between">
            <img className="spacexlogo" alt="spacexlogo" src={spacex}></img>
            <span></span>
            <form className="form-inline">
                <button className="btn btn-round" type="button" onClick={openRepo}>
                    Vehicles
                </button>
            </form>
        </nav>
    )
}