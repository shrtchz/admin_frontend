import React, { useState } from "react";
// import '../../styles/sidebar.css'
import "../../styles/sidebar.css";
import styled from "styled-components";
import { NavLink, Link, Outlet } from "react-router-dom";
import * as FaIcons from  'react-icons/fa'
import * as AiIcons from  'react-icons/ai'
import * as IoIcons from  'react-icons/ri'
import * as RiIcons from  'react-icons/fa'
import * as CiIcons from 'react-icons/ci'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import { SidebarData,SidebarDash } from "./SidebarData";
import SubMenu from './SubMenu'
import Headers from "../Headers";

const SideBar = ({isOpen,children,item}) => {
  const [activeChild, setActiveCild] =useState([])
  const [submenu, setSubmenu] =useState(false)
  const showSubmenu=()=>{
    setSubmenu(!submenu)
  }

  const handleactive=()=>{
    // let data=SidebarData.map((item, index)=>{
      
    // })
    setActiveCild(console.log("Hi"))
    // console.log(subMenu)

  }
  return (
   
   <div className="container">
    <div className={`sidebar ${isOpen ? 'close' : ''}`}>
   <>
    <div className="dash">
    {SidebarDash.map((item, index) =>{
        return(
          <>
          <NavLink onClick={item.subMenu && showSubmenu} to={item.path} key={index} className="link" activeclassname="active">
           <div className="" style={{display:'flex', heigh:'100px'}}>
           <div className="icon" >
              {item.icon}
            </div>
            <span className="label" style={{display: isOpen ?'none' : 'block'}}>
              {item.title}
            </span>
           </div>
           <div>
            {
              item.subMenu && submenu 
              ? item.iconOpened 
              : item.subMenu 
              ? item.iconClosed
               : null
            }
           </div>
          </NavLink>
          {/* {
            submenu && item.subMenu.map((item, index)=>{
              return(
                <NavLink to={item.path} key={index}>
                <div className="icon" >
                   {item.icon}
                </div>
              <span className="label" style={{display: isOpen ?'none' : 'block'}}>
                {item.title}
                </span>
                </NavLink>
              )
            })
          } */}
          </>
          
        )
      })}
    </div>
    
       <div className="data">
       {SidebarData.map((item, index) =>{
        return(
          <>
          <NavLink onClick={item.subMenu && showSubmenu} to={item.path} key={index} className="link" activeclassname="active">
           <div className="" style={{display:'flex', heigh:'200px'}}>
           <div className="icon" >
              {item.icon}
            </div>
            <span className="label" style={{display: isOpen ?'none' : 'block'}}>
              {item.title}
            </span>
           </div>
           <div>
            {
              item.subMenu && submenu 
              ? item.iconOpened 
              : item.subMenu 
              ? item.iconClosed
               : null
            }
           </div>
          </NavLink>
          {/* {
            submenu && item.subMenu.map((item, index)=>{
              return(
                <NavLink to={item.path} key={index}>
                <div className="icon" >
                   {item.icon}
                </div>
              <span className="label" style={{display: isOpen ?'none' : 'block'}}>
                {item.title}
                </span>
                </NavLink>
              )
            })
          } */}
          </>
          
        )
      })}
       </div> 
   </>
    </div>
    
    <main>
    {/* <Headers/> */}
      {/* {children} */}
    </main>
      <Outlet/>
   </div>
   
  );
};

export default SideBar;
