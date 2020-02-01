import * as React from 'react'

import './search.scss'

export function Search() {
    return (
        <div className="search">
            <h1>Search for a movie!</h1>
            <div className="search-input">
                <input type="text" placeholder="Example: Mad Max" />
                <button className="search-btn">Search!</button>
            </div>
        </div>
    )
}