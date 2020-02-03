import * as React from 'react'
import { useEffect, useState } from 'react'

import { List } from '../../components/list'
import './profile.scss'

export function Profile() {
    const [ favs, setFavs ] = useState()
    const [ watchLaters, setWatchLaters ] = useState()

    function extractMovies(itemName: string) {
        const savedMoviesItem = window.localStorage.getItem(itemName)
        const savedMovies = savedMoviesItem
        ? JSON.parse(savedMoviesItem)
        : {}
        const movies = Object.keys(savedMovies)
            .map(movie => ({
                title: savedMovies[movie].title,
                image: savedMovies[movie].image,
                year: savedMovies[movie].year,
                id: movie
            }))
        return movies
    }

    useEffect(() => {
        setFavs(extractMovies('favsmovies'))
        setWatchLaters(extractMovies('watchmovies'))
    }, [])

    return (
        <div className="profile">
            <div className="container">
                <List
                    title="Favourites"
                    items={favs || []}
                />
                <List
                    title="Watch Later"
                    items={watchLaters || []}
                />
            </div>
        </div>
    )
}
