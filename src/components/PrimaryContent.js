import React from "react";
import falcon1 from "../assets/falcon1.png";
import falcon9 from "../assets/falcon9.png";
import falconheavy from "../assets/falcon_heavy.png";
import starship from "../assets/starship.png";

export default function PrimaryContent() {
    return(
        <div className="col-12 text-center">
            <h1 className="title-text">Vehicles</h1>
            <div className="linebreak"></div>
            <p className="subtitle">Rockets that are shown below were created by SpaceX. Proportions between rockets are somewhat accurate. Click on a rocket to learn more.</p>
            <div className="row">
                <div className="col-3 vehicle">
                    <div className="btn-vehicle">
                        <h3>Falcon 1</h3>
                        <img className="falcon1-image" alt="falcon1" src={falcon1}></img>
                    </div>
                </div>
                <div className="col-3 vehicle">
                    <div className="btn-vehicle">
                        <h3>Falcon 9</h3>
                        <img className="falcon9-image" alt="falcon1" src={falcon9}></img>
                    </div>
                </div>
                <div className="col-3 vehicle">
                    <div className="btn-vehicle">
                        <h3>Falcon Heavy</h3>
                        <img className="falconheavy-image" alt="falcon1" src={falconheavy}></img>
                    </div>
                </div>
                <div className="col-3 vehicle">
                    <div className="btn-vehicle">
                        <h3>Starship</h3>
                        <img className="starship-image" alt="falcon1" src={starship}></img>
                    </div>
                </div>
            </div>
        </div>
        
    )
}