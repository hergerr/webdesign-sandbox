import "./login-register-box.styles.css"
import { LabelAndInput } from "../label-and-input/label-and-input.component.jsx"
import React from "react"

export const LoginRegisterBox = () => {
    return (
        <div className="outer-box">
            <div className="inner-box">
                <LabelAndInput className="login" label="login" />
                <LabelAndInput className="password" label="password" />
            </div>
            <p className="register">register</p>
        </div>
    )
}