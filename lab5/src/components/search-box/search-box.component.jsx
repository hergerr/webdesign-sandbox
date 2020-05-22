import React from 'react'
import './search-box.styles.css'

export const SearchBox = (props) => (
    <div className="SearchBox-container">
        <input
            className="SearchBox-searchbox"
            type="search"
            placeholder="Filter our customers"
        />
    </div>
)