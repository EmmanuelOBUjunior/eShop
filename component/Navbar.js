/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
            <a className="navbar-brand">CRISHOP</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link href="/cart">
                    <a className="nav-link"><i className="fas fa-shopping-cart"></i>Cart</a>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link href="/signin">
                    <a className="nav-link"><i className ="fas fa-sign-in-alt"/>Sign In</a>
                    </Link>
                </li>

                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    User Name
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/profile">Profile</a>
                    <a className="dropdown-item" href="/logout">Logout</a>
                    </div>
                </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
