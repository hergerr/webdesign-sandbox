import React from 'react'
import './home-page.styles.css'
import { LoginRegisterBox } from '../login-register-box/login-register-box.component';
import { ContactControl } from '../contact-control/contact-control.component';
import { CoursesList } from '../courses-list/courses-list.component';

export const HomePage = () => (
    <div className="HomePage-container">
        <p className="HomePage-logo">LG</p>
        <title className="HomePage-title">Learn German!</title>
        <p className="HomePage-description">
            Hi! This is an app which helps you to learn german language.
            Through modern memotechniques we are able to maximize your
            progress without taking more of your precious time or effort.
        </p>
        <LoginRegisterBox className="HomePage-login-register" />
        <h3>Contact</h3>
        <ContactControl />
        <h3>Our courses</h3>
        <div className="HomePage-list-wrapper">
            <CoursesList />
        </div>
    </div>
)