import React, { useState } from "react";
import falcon1 from "../assets/falcon1.png";
import falcon9 from "../assets/falcon9.png";
import falconheavy from "../assets/falcon_heavy.png";
import starship from "../assets/starship.png";
import Modal from "react-modal";
import ModalContent from "./ModalContent";
import backgroundImage from "../assets/background_web.png";
import axios from "axios";

export default function PrimaryContent() {


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [rocketImage, setRocketImage] = useState();
    const [rocketName, setRocketName] = useState();
    const [rocketStatus, setRocketStatus] = useState();
    const [rocketDesc, setRocketDesc] = useState();
    const [engineStages, setEngineStages] = useState();
    const [engineType, setEngineType] = useState();
    const [engineThrust, setEngineThrust] = useState();

    
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    const openModal = (id, imgsource) => {
        console.log('Clicked! id: ', id, imgsource);
        const queryURL = "https://api.spacexdata.com/v4/rockets/" + id;
        console.log(queryURL);
        axios({
            method: 'get',
            url: queryURL
        })
        .then(function(response) {
            console.log(response.data);
            setRocketImage(imgsource)
            setRocketName(response.data.name);
            setRocketStatus(response.data.active);
            setRocketDesc(response.data.description);
            setEngineStages(response.data.stages);
            setEngineType(response.data.engines.type.charAt(0).toUpperCase() + response.data.engines.type.slice(1));
            setEngineThrust(response.data.engines.thrust_vacuum.lbf)
        })
        setModalIsOpenToTrue();
    }

    const customStyles = {
        content: {
            top : '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '0%',
            transform: 'translate(-50%, -50%)',
            backgroundImage: `linear-gradient(#00000088 70%, #ffffff42 100%), url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'rgb(0, 0, 0, 0.5)',
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '0px'
        }
    }

    return(
        <div className="col-12 text-center">
            <h1 className="title-text">Vehicles</h1>
            <div className="linebreak"></div>
            <p className="subtitle">Rockets that are shown below were created by SpaceX. Proportions between rockets are somewhat accurate. Click on a rocket to learn more.</p>
            <div className="row">
                <div className="col-3 vehicle">
                    <div className="btn-vehicle" onClick={() => openModal("5e9d0d95eda69955f709d1eb", falcon1)}>
                        <h3>Falcon 1</h3>
                        <img className="falcon1-image" alt="falcon1" src={falcon1}></img>
                    </div>
                </div>
                <div className="col-3 vehicle">
                    <div className="btn-vehicle" onClick={() => openModal("5e9d0d95eda69973a809d1ec", falcon9)}>
                        <h3>Falcon 9</h3>
                        <img className="falcon9-image" alt="falcon1" src={falcon9}></img>
                    </div>
                </div>
                <div className="col-3 vehicle">
                    <div className="btn-vehicle" onClick={() => openModal("5e9d0d95eda69974db09d1ed", falconheavy)}>
                        <h3>Falcon Heavy</h3>
                        <img className="falconheavy-image" alt="falcon1" src={falconheavy}></img>
                    </div>
                </div>
                <div className="col-3 vehicle">
                    <div className="btn-vehicle" onClick={() => openModal("5e9d0d96eda699382d09d1ee", starship)}>
                        <h3>Starship</h3>
                        <img className="starship-image" alt="falcon1" src={starship}></img>
                    </div>
                </div>
            </div>
            
            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
                        <button className="modal-close" onClick={setModalIsOpenToFalse}>
                            <span>X</span></button>
                        <ModalContent rocketImage={rocketImage} rocketName={rocketName} rocketStatus={rocketStatus} rocketDesc={rocketDesc} engineStages={engineStages} engineType={engineType} engineThrust={engineThrust}/>
            </Modal>
        </div>
        
    )
}