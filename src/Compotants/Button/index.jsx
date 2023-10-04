import React from "react";
import "../../Style/scss/Componants/Button/style.scss"

export default function Button(props) {
    return (
        <p className="Button">
            {props.text}
        </p>
    )
}