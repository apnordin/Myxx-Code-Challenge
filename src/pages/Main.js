import React from "react";
import Navbar from "../components/Navbar";
import PrimaryContent from "../components/PrimaryContent";
import Carousel from "../components/Carousel";

export default function Main () {


    const MainContent = () => {
        if (window.innerWidth > 762) {
            return (
                <PrimaryContent />
            )
        } else {
            return (
                <Carousel />
            )
        } 
        
    }

    return (
        <div className="background-web allpage">
            <Navbar />
            <div className="container">
                <div className="row">
                    <MainContent />
                </div>
            </div>
        </div>
    )
}