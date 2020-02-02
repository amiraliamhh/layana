import * as React from 'react'

import './content.scss'

export interface ContentProps {
    title: string
    overview: string
    voteAvg: number
    language: string
    release: string
}

export function Content({
    title,
    overview,
    voteAvg,
    language,
    release
}: ContentProps & React.Props<any>) {
    return (
        <div className="content">
            <h1>{ title }</h1>
            <p className="overview">{ overview }</p>
            <ul>
                <li>Vote Average: <span>{ voteAvg }</span></li>
                <li>Language: <span>{ language }</span></li>
                <li>Release Date: <span>{ release }</span></li>
            </ul>
        </div>
    )
}
