import React from 'react'
import { Link } from 'react-router-dom'
const SidebarLabel = () => {
  return (
    <>
    <Link to={item.path}>
        <div className="">
            {item.icon}
            <span className="label">
                {item.title}
            </span>
        </div>
    </Link>
    </>
  )
}

export default SidebarLabel