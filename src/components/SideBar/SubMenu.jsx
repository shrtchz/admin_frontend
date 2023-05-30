import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData, SidebarDash } from './SidebarData'


const SubMenu = ({item}) => {
  const [isActive, setIsActive] =useState(false)

  const tActive =()=> setIsActive(!isActive)
  return (
    <>
   
    </>
  )
}

export default SubMenu