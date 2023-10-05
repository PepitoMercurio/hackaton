// import React from "react";
// import "../../Style/scss/Componants/Banner/style.scss"

// export default function Banner() {
//     return (
//         <div className="Banner">
//             <img src="../../Style/img/velib-paris-banniere.jpg"/>
//             <div className="Banner-title">
//                 <div className="Banner-title-text">
//                     <h1>Pigeon</h1>
//                     <p>Butter Dog Suppremacy</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from "react";
import "../../Style/scss/Componants/Banner/style.scss";
import velibImage from "../../Style/img/velib-paris-banniere.jpg";

export default function Banner() {
    return (
        <div className="Banner">
            <img src={velibImage} alt="Velib Paris" />
            <div className="Banner-title">
                <div className="Banner-title-text">
                    <h1>Pigeon</h1>
                    <p>Butter Dog Suppremacy</p>
                </div>
            </div>
        </div>
    )
}
