import * as React from 'react'

import './list.scss'

interface ItemProps {
    image: string
    title: string
    year: string
}

function Item({
    image,
    title,
    year
}: ItemProps & React.Props<any>) {
    return (
        <div className="item">
            <img src={image} alt="poster"/>
            <h3>{ title }</h3>
            <p>{ year }</p>
        </div>
    )
}

interface ListProps {
    title: string
    items?: ItemProps[]
}

export function List({
    title,
    items = []
}: ListProps & React.Props<any>) {
    return (
        <div className="list">
            <h2>{ title }</h2>
            <div className="items">
                {
                    items.length
                    ? items.map((item, index) => (
                        <Item
                            key={index}
                            title={item.title}
                            image={item.image}
                            year={item.year}
                        />
                    ))
                    : (
                        <p>You have added no movies to this list yet.</p>
                    )
                }
            </div>
        </div>
    )
}