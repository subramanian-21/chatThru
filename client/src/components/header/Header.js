import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h1 className='logo'
                    onClick={() => window.scrollTo({top: 0})}>
                       ChatThru
                    </h1>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
