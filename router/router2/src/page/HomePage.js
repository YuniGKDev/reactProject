import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <h3>HomePage</h3>
        <Link to="/about">About page</Link>
    </div>
  )
}

export default HomePage