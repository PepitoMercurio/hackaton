import React from "react";
import "../../Style/scss/Componants/Banner/style.scss"

export default function Banner() {
    return (
        <div className="Banner">
            <img src="https://www.notrenature.be/media/cache/tw_card_image/uploads/media/62fe0604bcdcc/shutterstock-464836610.jpg"/>
            <div className="Banner-title">
                <div className="Banner-title-text">
                    <h1>Pigeon</h1>
                    <p>Butter Dog Suppremacy</p>
                </div>
            </div>
        </div>
    )
}