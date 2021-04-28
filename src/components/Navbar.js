import React from "react";
import spacex from "../assets/spacex.png";

export default function Navbar() {


    const DynamicNavbar = () => {
        if (window.innerWidth > 762) {
            return (
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
        } else {
            return (
                <nav className="navbar">
                    <img className="spacexlogo img-center" alt="spacexlogo" src={spacex}></img>
                </nav>
            )
        }
    }

    const openRepo = () => {
        const url = "https://github.com/apnordin/Myxx-Code-Challenge"
        window.open(url, "_blank");
    }
    
    return(
        <DynamicNavbar />
    )
}