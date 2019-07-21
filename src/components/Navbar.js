import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          {/* <Link to="/edit">Edit</Link> */}
          {/* <Link to="/AddUser">New User</Link> */}
        </ul>
      </nav>
    </div>
  )
}
