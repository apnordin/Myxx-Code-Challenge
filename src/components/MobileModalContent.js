import React from "react";

export default function MobileModalContent ( {rocketImage, rocketName, rocketStatus, rocketDesc, engineStages, engineType, engineThrust}) {


    const Status = () => {
        if (rocketStatus === true) {
            return (
                <div className="rocket-status inactive my-3">Status: Inactive</div>
            )
        } else {
            return (
                <div className="rocket-status active my-3">Status: Active</div>
            )
        }
    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-12 mt-3 modaltext">
                    <h1 className="rocket-name mb-0">{rocketName}</h1>
                    <div className="linebreak"></div>
                    <Status />
                    <div className="rocket-description my-4">{rocketDesc}
                    </div>
                    <div className="engine-list mb-3">Engines
                        <div className="engine-sublist my-2">- Engines: {engineStages}</div>
                        <div className="engine-sublist my-2">- Type: {engineType}</div>
                        <div className="engine-sublist my2">- Thrust: {engineThrust} lbs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}