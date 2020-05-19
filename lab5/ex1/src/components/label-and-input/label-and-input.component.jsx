import React from "react";
import './label-and-input.styles.css';

export const LabelAndInput = (props) => {
    return (
        <div className="label-and-input-wrapper">
            <p>{props.label}</p>
            <input/>
        </div>
    )
}