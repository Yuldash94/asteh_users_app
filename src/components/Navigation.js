import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
      <nav>
          <Link to='/'>Auth</Link>
          <Link to='/users-list'>Users</Link>
      </nav>
  )
}

export default Navigation