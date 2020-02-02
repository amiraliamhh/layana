import * as React from 'react'
import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Info } from '../../components/detail/info'
import { Content } from '../../components/detail/content'
import './detail.scss'

interface Params {
    id: string
}

export function Detail(props: RouteComponentProps<Params> & React.Props<any>) {
    const { params } = props.match
    const [ content, setContent ] = useState({
        title: '',
        overview: '',
        voteAvg: 0,
        language: '',
        release: ''
    })
    const [ info, setInfo ] = useState({
        image: ''
    })
    useEffect(() => {
        const baseUrl = process.env.BASE_URL
        const imageBaseUrl = process.env.IMAGES_BASE_URL
        const apiKey = process.env.API_KEY
        async function fetchMovie() {
            const movie = await fetch(`${baseUrl}/${params.id}?api_key=${apiKey}`)
            .then(res => res.json())
            
            setContent({
                title: movie.title,
                overview: movie.overview,
                voteAvg: movie.vote_average,
                language: movie.original_language,
                release: movie.release_date
            })
            setInfo({
                image: `${imageBaseUrl}${movie.poster_path}`
            })
        }
        fetchMovie()
    }, [])

    return (
        <div className="detail">
            <div className="container">
                <Info
                    image={info.image}
                />
                <Content
                    title={content.title}
                    overview={content.overview}
                    voteAvg={content.voteAvg}
                    language={content.language}
                    release={content.release}
                />
            </div>
        </div>
    )
}
