import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </nav>
    </div>
  )
}
