import React from "react";
import Navbar from "../components/Navbar";
import PrimaryContent from "../components/PrimaryContent"

export default function Main () {
    return (
        <div className="background-web allpage">
            <Navbar />
            <div className="container">
                <div className="row">
                    <PrimaryContent />
                </div>
            </div>
        </div>
    )
}