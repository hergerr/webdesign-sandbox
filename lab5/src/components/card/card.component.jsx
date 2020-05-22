import React from 'react'
import './card.styles.css'

export const Card = (props) => (
    <div className="Card">
        <img className="Card-image" src={props.src}></img>
        <p className="Card-desc">{props.desc}</p>
    </div>
)