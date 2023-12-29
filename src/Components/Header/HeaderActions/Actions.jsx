import React from 'react'
import { getMentorPath, paths } from '../../../routes/paths'
import { Link } from 'react-router-dom';

export default function Actions() {
  return (
    <Link to={getMentorPath(paths.ADD_COURSE)} className="px-3 flex items-center text-white bg-sky-400 hover:bg-sky-700">
      Add Course
    </Link>
  )
}
