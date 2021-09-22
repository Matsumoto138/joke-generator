import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
      <>
      <h2>Welcome! Please Choose One Option</h2>
        <nav>
        <ul>
          <Link to="/career">
            <li><a href="">Career</a></li>
          </Link>
          <Link to="/fashion">
            <li><a href="">Fashion</a></li>
          </Link>
          <Link to="/movie">
            <li><a href="">Movie</a></li>
          </Link>

        </ul>
      </nav>
      </>
    )
}

export default Nav
