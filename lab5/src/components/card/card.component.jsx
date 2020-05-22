import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="Card">
        <img className="Card-image" src={props.src} alt={props.desc}></img>
        <span className="Card-desc">{props.desc}</span>
    </div>
)