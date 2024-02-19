import React from 'react'
import LeftGrid from './LeftGrid'
import RightGrid from './RightGrid'
import "./Layouts.css"
function Layouts() {
  return (
    <div className="container-body">
    <div className="left-container">
        <LeftGrid />
    </div>
    <div className="right-container">
        <RightGrid />
    </div>
  </div>
  )
}

export default Layouts