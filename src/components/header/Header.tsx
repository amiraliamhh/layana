import * as React from 'react'
import { Link } from 'react-router-dom'

import AccountIcon from '../../../public/assets/account.svg'
import './header.scss'

export function Header() {
    return (
        <div className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <h2>Layana</h2>
                </Link>
                <div className="navbar">
                    <button className="profile-btn">
                        <img src={AccountIcon} alt="account icon"/>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    )
}