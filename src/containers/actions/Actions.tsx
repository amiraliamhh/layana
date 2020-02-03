import * as React from 'react'
import { useState } from 'react'

import { StarIcon } from '../../icons/Star'
import { WatchLaterIcon } from '../../icons/WatchLater'
import { Movie } from '../../components/search'

interface ActionsProps {
    id: number|string
    movie: Movie
}

export function Actions({
    id,
    movie
}: ActionsProps & React.Props<any>) {
    const savedFavs = window.localStorage.getItem('favs')
    const [ favs, setFavs ] = useState(savedFavs ? new Set(JSON.parse(savedFavs)) : new Set())
    const savedWatchLater = window.localStorage.getItem('watch')
    const [ watchLaters, setWatchLaters] = useState(savedWatchLater ? new Set(JSON.parse(savedWatchLater)) : new Set())

    function changeList(listName: string, value: number) {
        const savedList = window.localStorage.getItem(listName)
        const savedListMovies = window.localStorage.getItem(`${listName}movies`)
        const savedMovies = savedListMovies ? JSON.parse(savedListMovies) : {}
        const listArray = savedList ? JSON.parse(savedList) : []
        const list = new Set(listArray)
        if (list.has(value)) {
            list.delete(value)
            delete savedMovies[value]
        } else {
            list.add(value)
            savedMovies[value] = movie
        }
        window.localStorage.setItem(listName, JSON.stringify(list))
        window.localStorage.setItem(`${listName}movies`, JSON.stringify(savedMovies))
        return list
    }

    function addToFavs() {
        const newFavs = changeList('favs', Number(id))
        setFavs(newFavs)
    }

    function addToWatchLater() {
        const newWatchLaters = changeList('watch', Number(id))
        setWatchLaters(newWatchLaters)
    }

    return (
        <div className="actions">
            <div
                className="add-favourite"
                onClick={addToFavs}
            >
                <StarIcon width={16} height={16} fill={favs.has(id) ? '#ebc22f' : '#424242'} />
                <span>{
                    favs.has(id)
                    ? 'Is Your Favourite!'
                    : 'Add To Favourites'
                }</span>
            </div>
            <div
                className="add-to-watch-later"
                onClick={addToWatchLater}
            >
                <WatchLaterIcon width={16} height={16} fill={watchLaters.has(id) ? '#ebc22f' : '#424242'} />
                <span>{
                    watchLaters.has(id)
                    ? 'Is In Watch Later List!'
                    : 'Add To Watch Later'    
                }</span>
            </div>
        </div>
    )
}
