import './generic-button.styles.css';
import React from 'react';

export const GenericButton = (props) => {
    return (
        <button className="button" onClick={props.onClick}>{props.value}</button>
    )
}