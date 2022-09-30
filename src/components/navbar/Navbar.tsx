import React from 'react'
import {NavbarStyled} from "./navbar.styled";
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <NavbarStyled>

            <div>
                <Link to="/profile">Profile</Link>
            </div>
            <div>
                <Link to="/messages">Messages</Link>
            </div>
            <div>
                <Link to="/news">News</Link>
            </div>
            <div>
                <Link to="/music">Music</Link>
            </div>
            <div>
                <Link to="/settings">Settings</Link>
            </div>

        </NavbarStyled>
    )
}