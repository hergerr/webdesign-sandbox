import "./login-regiter-box.styles.css"
import { LabelAndInput } from "../label-and-input.component"
import React from "react"

export const LoginRegisterBox = () => {
    return (
        <div className="outer-box">
            <div className="inner-box">
                <LabelAndInput label="login" />
                <LabelAndInput label="password" />
            </div>
            <div className="register"></div>
        </div>
    )
}