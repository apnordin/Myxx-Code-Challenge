import React, { useState } from "react";
import falcon1 from "../assets/falcon1.png";
import falcon9 from "../assets/falcon9.png";
import falconheavy from "../assets/falcon_heavy.png";
import starship from "../assets/starship.png";
import Modal from "react-modal";
import MobileModalContent from "./MobileModalContent";
import backgroundImage from "../assets/background_web.png";
import axios from "axios";

export default function Carousel() {


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [rocketImage, setRocketImage] = useState();
    const [rocketName, setRocketName] = useState();
    const [rocketStatus, setRocketStatus] = useState();
    const [rocketDesc, setRocketDesc] = useState();
    const [engineStages, setEngineStages] = useState();
    const [engineType, setEngineType] = useState();
    const [engineThrust, setEngineThrust] = useState();

    const [currentRocketIndex, setCurrentRocketIndex] = useState(0);

    
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    const openModal = (id, imgsource) => {
        const queryURL = "https://api.spacexdata.com/v4/rockets/" + id;
        axios({
            method: 'get',
            url: queryURL
        })
        .then(function(response) {
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

    const nextBtn = (current) => {
        if (current < 3) {
            setCurrentRocketIndex(current + 1)
        } else if (current === 3) {
            setCurrentRocketIndex(0)
        }

    }

    const prevBtn = (current) => {
        if (current > 0) {
            setCurrentRocketIndex(current - 1)
        } else if (current === 0) {
            setCurrentRocketIndex(3)
        }
    }

    const carouselItems = [
        { name: "Falcon 1", shortname: "falcon1", imgclass: "falcon1-image-c", imgURL: {falcon1}, idKey: "5e9d0d95eda69955f709d1eb" },
        { name: "Falcon 9", shortname: "falcon9", imgclass: "falcon9-image-c", imgURL: {falcon9}, idKey: "5e9d0d95eda69973a809d1ec" },
        { name: "Falcon Heavy", shortname: "falconheavy", imgclass: "falconheavy-image-c", imgURL: {falconheavy}, idKey: "5e9d0d95eda69974db09d1ed" },
        { name: "Starship", shortname: "starship", imgclass: "starship-image-c", imgURL: {starship}, idKey: "5e9d0d96eda699382d09d1ee" },
    ]

    const Slider = () => {

        const item = carouselItems[currentRocketIndex];
        const shortName = carouselItems[currentRocketIndex].shortname;
        const imageURL = carouselItems[currentRocketIndex].imgURL[shortName]

        return (
            <div className="slider">

                    <div className="prevBtn slider-btn" onClick={() => prevBtn(currentRocketIndex)}>
                        <div className="slider-btn-text">
                            Prev
                        </div>
                    </div>
                    <div className="nextBtn slider-btn" onClick={() => nextBtn(currentRocketIndex)}>
                        <div className="slider-btn-text">
                            Next
                        </div>
                    </div>
                    <div className="vehicle" key={item.shortname}>
                        <div className="btn-vehicle" onClick={() => openModal(item.idKey, imageURL)}>
                            <h3>{item.name}</h3>
                            <img className={item.imgclass} alt={imageURL} src={imageURL}></img>
                        </div>
                    </div>
                
            </div>
        )
    }

    return(
        <div className="col-12 text-center">
            <h1 className="title-text">Vehicles</h1>
            <div className="linebreak"></div>
            <p className="subtitle">Rockets shown below were created by SpaceX. Proportions between rockets are somewhat accurate. Click on a rocket to learn more.</p>
                <Slider />          
            
            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
                        <button className="modal-close" onClick={setModalIsOpenToFalse}>
                            <span>X</span></button>
                        <MobileModalContent rocketImage={rocketImage} rocketName={rocketName} rocketStatus={rocketStatus} rocketDesc={rocketDesc} engineStages={engineStages} engineType={engineType} engineThrust={engineThrust}/>
            </Modal>
        </div>
    )
}