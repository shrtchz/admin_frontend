import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/accesslogs.css'
import * as IoIcons from 'react-icons/io'
import { Outlet } from 'react-router-dom'


const Users = ({sidebar}) => {
 
  return (
    <>
      <Outlet/>
    </>
  )
}

export default Users