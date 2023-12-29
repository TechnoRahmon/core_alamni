import React from 'react'

export default function MainButton({
    className,
    onClick,
    text
}) {
  return (
    <button onClick={onClick} className={`${className} bg-indigo-600 text-white px-6 py-4`}>
        {text}
    </button>
  )
}
