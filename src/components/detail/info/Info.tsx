import * as React from 'react'

import { StarIcon } from '../../../icons/Star'
import { WatchLaterIcon } from '../../../icons/WatchLater'
import './info.scss'

interface InfoProps {
    isFavourite?: boolean
    isInWatchLater?: boolean
    image: string
}

export function Info({
    isFavourite = false,
    isInWatchLater = false,
    image
}: InfoProps & React.Props<any>) {
    return (
        <div className="info">
            <img src={image} alt="poster"/>
            <div className="actions">
                <div className="add-fav">
                    <StarIcon />
                    <span>{
                        isFavourite
                        ? 'Is Your Favourite!'
                        : 'Add To Favourites'
                    }</span>
                </div>
                <div className="add-watch-later">
                    <WatchLaterIcon />
                    <span>{
                        isInWatchLater
                        ? 'Is In Your Watch Later List!'
                        : 'Add To Watch Later'
                    }</span>
                </div>
            </div>
        </div>
    )
}
