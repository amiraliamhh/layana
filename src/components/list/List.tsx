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
}

export function List({
    title
}: ListProps & React.Props<any>) {
    return (
        <div className="list">
            <h2>{ title }</h2>
            <div className="items">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}