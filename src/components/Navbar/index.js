import React from 'react'
import { Nav, NavLink, NavICon, Bars  } from './NavbarElements'


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'> PIZZA</NavLink>
                <NavICon onClick={toggle}>
                    <p>MENU</p>
                    <Bars/>
                </NavICon>
            </Nav>
        </>
    )
}

export default Navbar
