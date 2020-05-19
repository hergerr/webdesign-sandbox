import React from "react"

export const LabelAndInput = (props) => {
    return (
        <div className="label-and-input-wrapper">
            <p className="label">{props.label}</p>
            <input className="text-input"/>
        </div>
    )
}