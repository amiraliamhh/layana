import * as React from 'react'

import { Header } from '../../components/header'
import { Search } from '../../components/search'
import { ScrollIcon } from '../../icons/scroll'
import './head.scss'

export function Head() {
    return (
        <div className="head">
            <Header />
            <div className="search-box container">
                <Search />
                <div className="scroll-icon">
                    <ScrollIcon />
                </div>
            </div>
        </div>
    )
}
