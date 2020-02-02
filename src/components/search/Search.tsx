import * as React from 'react'
import { useState } from 'react'

import { StarIcon } from '../../icons/Star'
import { WatchLaterIcon } from '../../icons/WatchLater'
import { Actions } from '../../containers/actions'
import './search.scss'

export function Search() {
    const [ searchText, setSearchText ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])
    const [ showResults, setShowResults ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const imagesBaseUrl = process.env.IMAGES_BASE_URL

    async function search() {
        setLoading(true)
        const baseUrl = process.env.BASE_URL
        const apiKey = process.env.API_KEY
        const { results } = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${searchText}`)
            .then(res => res.json())
        
        setSearchResults(results)
        setShowResults(true)
        setLoading(false)
    }

    function handleSearchChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(value)
        setShowResults(false)
    }

    return (
        <div className="search">
            <h1>Search for a movie!</h1>
            <div className="search-input">
                <input
                    type="text"
                    placeholder="Example: Mad Max"
                    onChange={handleSearchChange}
                />
                <button
                    className="search-btn"
                    onClick={search}
                >
                    {
                        loading
                        ? <div className="loading"></div>
                        : 'Search!'
                    }
                </button>
                {
                    showResults
                    ? (
                        <div className="results">
                            {
                                searchResults.length
                                ? searchResults.map((result: any) => (
                                    <div className="result" key={result.id}>
                                        <div className="description">
                                            <h4>{ result.title }</h4>
                                            <span>|</span>
                                            <span>{ new Date(result.release_date).getFullYear() }</span>
                                        </div>
                                        <div className="actions-container">
                                            <Actions id={result.id} />
                                            <img src={`${imagesBaseUrl}${result.poster_path}`} alt="movie poster"/>
                                        </div>
                                    </div>
                                ))
                                : <p className="no-results">No results werer found!</p>
                            }
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}