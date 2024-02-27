import React from 'react'
import { Link } from 'react-router-dom'
const Student = () => {
  return (
<<<<<<< HEAD
    <div className='text-white'>
      This is Student Page
      {/* add two buttons that redirects to /academic and /non-academic */}
      {/* <Link to="/academic">Academic</Link>
      <Link to="/non-academic">Non Academic</Link> */}
=======
    <div>
      This is student page
      <Link to="/academic">Academic</Link>
      <Link to="/non-academic">Non Academic</Link>
>>>>>>> d1e5777efd4dfd9e901165d1de3744ba97da5418
    </div>
  )
}

export default Student
