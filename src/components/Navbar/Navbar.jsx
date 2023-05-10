import React,{Children, useState} from 'react'
import Logo from '../../assets/images/logo.png'
import Shrtchz from '../../assets/images/shrtchz.png'
import { FaSearch} from "react-icons/fa";
import Clock from './Clock';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import SideBar from '../SideBar/SideBar';
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from '../SideBar/SidebarData';
import SubMenu from '../SideBar/SubMenu';
import '../../styles/navbar.css'


const Navbar = ({isOpen, showSidebar}) => {
  
    
  return (
   <>
     <nav className="navbar">
     
      <div className='contain'>
      <Link to="#" className='menu-bar' style={{opacity:'1', width:"2rem", marginLeft:'-2rem'}}> 
        <FaIcons.FaBars size={20} onClick={showSidebar} />
      </Link>
      <Link className="logo" href="#">
      <img src={Shrtchz} alt='shrtchz'/>
        {/* <img src={Logo} alt='logo' style={{width:'20%', }}className=''/> */}
        {/* <p className='pt-3'>ShortChase</p> */}
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
   
    </nav>
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
  )
}

export default Navbar