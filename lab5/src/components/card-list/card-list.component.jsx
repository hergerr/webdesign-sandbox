import React from 'react'
import './card-list.styles.css'
import { Card } from '../../components/card/card.component'

export const CardList = (props) => (
    <div className="CardList-container">
        {props.companies.map(company => (
            <div key={company.desc} className="CardList-card">
                <Card src={company.src} desc={company.desc} />
            </div>
        ))}
    </div>
)