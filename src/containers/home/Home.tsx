import * as React from 'react'

import { Search } from '../../components/search'
import { ScrollIcon } from '../../icons/Scroll'
import './home.scss'

export function Home() {
    return (
        <div className="home">
            <div className="search-box container">
                <Search />
                <div className="scroll-icon">
                    <ScrollIcon />
                </div>
            </div>
        </div>
    )
}
