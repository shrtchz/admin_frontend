import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// const SidebarLink = styled(Link)`
// display: flex`


const SubMenu = ({item}) => {
  const [isActive, setIsActive] =useState(false)

  const tActive =()=> setIsActive(!isActive)
  return (
    <>
     <Link to={item.path} className={isActive ? 'active' : 'notactive'}  onClick={tActive} >
        <div className="">
            {item.icon}
            <span className="label">
                {item.title}
            </span>
        </div>
    </Link>
    {/* <SidebarLink to={item.path}/> */}
      {/* <a to={item.path}>
        <div className="">
          {item.icon}
          <span className="label">
            {item.title}
          </span>
        </div>
      </a> */}
    </>
  )
}

export default SubMenu