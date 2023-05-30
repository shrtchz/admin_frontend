import React, { Children, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Shrtchz from "../../assets/images/shrtchz.png";
import AdminLogo from "../../assets/images/adminlogo.jpeg";
import { FaSearch } from "react-icons/fa";
import Clock from "./Clock";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import SideBar from "../SideBar/SideBar";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../SideBar/SidebarData";
import SubMenu from "../SideBar/SubMenu";
// import '../../styles/navbar.css'

import "./navbar.css";

const Navbar = ({ isOpen, showSidebar, onLogout }) => {
  return (
    <>
      <div className="navba containter-fluid p-0 m-0">
        <div className="row align-items-center h-100">
          <div className="col-lg-3  d-flex col-xl-2 col-5 align-items-center ">
            <Link to="#" className="menu-bar " style={{ opacity: "0" }}>
              <FaIcons.FaBars size={30} color="#A3A29E" onClick={showSidebar} />
            </Link>

            <Link className="logo" href="#">
              <img
                src={AdminLogo}
                className=""
                style={{ width: "100%" }}
                alt="shrtchz"
              />
            </Link>
          </div>
          <div className="col-lg-5  d-none d-lg-flex align-items-center bd-warning">
            <div className="search col-12 d-flex flex-row align-items-center ">
              <FaSearch size={15} color="#A3A29E" />
              <input type="text" className="" placeholder="Search" />
            </div>
          </div>
          <div className="col-7 d-flex  col-lg-4 col-xl-5 align-items-center  align-items-center">
            <div className="d-flex flex-row w-100 justify-content-center align-items-center px-4">
              <div className="mt-1">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>

              <Clock />
              <UserInfo onLogout={onLogout} />
            </div>
          </div>
          {/* <nav className='navba conatinter-fluid'>
        <div className='row bg-primary align-items-center h-100 '>
          <div className='col-6 fs-5 col-md-3 col-lg-2 col-xl-2 bg-warning px-0 '>
            djdj
          </div>
          <div className='col-5 d-none d-md-flex bg-success col-xl-6'>
            fhhf
          </div>
          <div className='col-6 col-md-4 bg-danger'>
            djjhkdjh
          </div>
        </div>

      </nav> */}
        </div>
      </div>
      {/* <nav className="navbar">
     
      <div className='contain'>
      <Link to="#" className='menu-bar' style={{opacity:'1', width:"2rem", marginLeft:'-2rem'}}> 
        <FaIcons.FaBars size={20} onClick={showSidebar} />
      </Link>
      <Link className="logo" href="#">
      <img src={Shrtchz} alt='shrtchz'/>
        
      </Link>
      </div>
      
    <div className='right'>
    <div className="search">
        <FaSearch size={13} color='#A3A29E'/>
        <input type="text" placeholder='Search' />
      </div>  
    <div>
        <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
        </label>
    </div>
    <Clock/>
    <UserInfo/>
    </div>  
   
    </nav> */}
      {/* <div className={!sidebar ? 'sidebarnav ' : 'sidebarnav close'}>
      <div className="sidebarwrap" >
       
        { SidebarData.map((item, index)=>{
          return <SubMenu item={item} key={index} sidebar={sidebar}/>

        })}
      </div>

    </div> */}
      {/* <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        <NavIcon to="#">
         <AiIcons.AiOutlineClose onClick={showSidebar}/>
        </NavIcon>
      </SidebarWrap>
    </SidebarNav> */}
      {/* <div className="main" style={{marginLeft: sidebar ? '250px' : '50px'}}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente repudiandae aspernatur corrupti veniam tenetur eius aliquid quos necessitatibus sunt doloremque consectetur molestiae explicabo, labore assumenda maiores error debitis totam quo.
    </div> */}
    </>
  );
};

export default Navbar;
