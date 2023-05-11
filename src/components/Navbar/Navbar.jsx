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
// import '../../styles/navbar.css'
import { FaAngleDown } from "react-icons/fa";

import './navbar.css'

const Navbar = ({isOpen, showSidebar}) => {
  
    
  return (
   <>
    <nav className='container-fluid navba d-flex align-items-center justify-content-center'>
    <div className='row  w-100 d-flex align-items-center'>
      <div className='col-sm-3  d-flex align-items-center'>
      <Link to="#" className='menu-bar ' style={{opacity:'1'}}> 
            <FaIcons.FaBars size={20} color='#A3A29E' onClick={showSidebar} />
          </Link>
          {/* <Link className="logo px-0" href="#"> */}
          <Link className="col-8 d-sm-flex d-none logo px-0"  href="#">
            <img src={Shrtchz} className='img-sm'  alt='shrtchz'/>
          </Link>
            
      </div>
      <div className='col-5 d-none sm d-md-flex xxl'>
      <div className='search  d-flex flex-row align-items-center '>
      <FaSearch size={15} color='#A3A29E'/>
        <input type="text" className='' placeholder='Search' />
      </div>
      </div>
      <div className='col-md-3 col-9 flex lef'>
        <div  className='d-flex flex-row align-items-center'>
        <div className='mt-2 px-sm-0 px-2'>
        <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
        </label>
        </div>
        <Clock/>
        <UserInfo/>
      </div>
    </div>
    </div>

    
    

    </nav>
     {/* <nav className='navbar d-flex flex-lg-column flex-sm-row flex-md-row justify-content-center'>
      <div className='row d-flex col-12 '>
        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4">
          <Link to="#" className='menu-bar ' style={{opacity:'1'}}> 
            <FaIcons.FaBars size={20} onClick={showSidebar} />
          </Link>
          <Link className="logo px-0" href="#">
            <img src={Shrtchz}   alt='shrtchz'/>
          </Link>
        </div>
        <div className=' col-xxl-6 col-xl-6 col-lg-5 d-sm-none d-md-none d-lg-flex d-xs-none' >
          <div className='search'>
             <FaSearch size={13} color='#A3A29E'/>
            <input type="text" placeholder='Search' />
          </div>
           
        </div> 
        <div className='row col-xxl-4  col-xl-4 col-lg-4 col-md-8 col-sm-8'>
           <div className='d-flex flex-row justify-content-between align-items-center'>
            <div className='d-lg-flex col-1 d-sm-none'>
                <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
                </label>   
            </div>
         
          <Clock/>
         
          <UserInfo/>
           </div>
        </div>
      </div>
    </nav>  */}
       {/* <nav className="navbar">
     
      <div className='contain'>
      <Link to="#" className='menu-bar' style={{opacity:'1', width:"2rem", marginLeft:'-2rem'}}> 
        <FaIcons.FaBars size={20} onClick={showSidebar} />
      </Link>
      <Link className="logo" href="#">
      <img src={Shrtchz} alt='shrtchz'/>
        <img src={Logo} alt='logo' style={{width:'20%', }}/>
        <p className='pt-3'>ShortChase</p>
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
   
    </nav>   */}
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