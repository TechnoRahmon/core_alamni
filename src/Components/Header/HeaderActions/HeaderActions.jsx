import React from 'react'
import Actions from './Actions'

export default function HeaderActions() {
  
  let content = <Actions/>


  return (
    <div className='flex gap-3'>
      {content}
    </div>
  )
}
