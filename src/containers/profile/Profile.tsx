import * as React from 'react'

import { List } from '../../components/list'
import './profile.scss'

export function Profile() {
    return (
        <div className="profile">
            <div className="container">
                <List
                    title="Favourites"
                />
            </div>
        </div>
    )
}
