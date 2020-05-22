import React from 'react'
import './search-box.styles.css'

export const SearchBox = (props) => (
    <div className="SearchBox-container">
        <input
            className="SearchBox-searchbox"
            placeholder="Filter our customers"
            onChange={props.handleChange}
        />
    </div>
)