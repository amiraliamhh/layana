import * as React from 'react'

import AccountIcon from '../../../public/assets/account.svg'
import './header.scss'

export function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <h2>Layana</h2>
                </div>
                <div className="navbar">
                    <a>Categories</a>
                    <button className="profile-btn">
                        <img src={AccountIcon} alt="account icon"/>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    )
}