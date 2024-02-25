import React from 'react'
import { Link } from 'react-router-dom'
const Student = () => {
  return (
    <div>
      This is student page
      <Link to="/academic">Academic</Link>
      <Link to="/non-academic">Non Academic</Link>
    </div>
  )
}

export default Student
