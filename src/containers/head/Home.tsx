import * as React from 'react'

import { Search } from '../../components/search'
import './head.scss'

export function Head() {
    return (
        <div className="head">
            <div className="search-box container">
                <Search />
            </div>
        </div>
    )
}
