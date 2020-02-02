import * as React from 'react'

import { Search } from '../../components/search'
import { ScrollIcon } from '../../icons/Scroll'
import './head.scss'

export function Head() {
    return (
        <div className="head">
            <div className="search-box container">
                <Search />
                <div className="scroll-icon">
                    <ScrollIcon />
                </div>
            </div>
        </div>
    )
}
