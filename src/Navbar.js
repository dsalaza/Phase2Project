import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to='/explore'>
                <button className={'NavButtons'} type='button'>Explore</button>
            </NavLink>
            <NavLink to='/review'>
                <button className={'NavButtons'} type='button'>Review</button>
            </NavLink>
            <NavLink to='/'>
                <button className={'NavButtons'} type='button'>Home</button>
            </NavLink>
        </nav>
    </div>
  )
}

export default Navbar