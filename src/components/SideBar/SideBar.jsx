import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { SidebarData, SidebarDash } from "./SidebarData";
import './sidebar.css';

const SideBar = ({ isOpen, children }) => {
  const [subMenus, setSubMenus] = useState({});

  const showSubMenu = (index) => {
    setSubMenus({
      ...subMenus,
      [index]: !subMenus[index]
    });
  }

  return (
    <div className="contain">
      <div className={`sidebar ${isOpen ? 'close' : ''}`}>
        <>
          <div className="dash">
            {SidebarDash.map((item, index) => (
              <NavLink
                onClick={() => showSubMenu(index)}
                to={item.path}
                key={index}
                className="link"
                activeclassname="active"
              >
                <div className="" style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <div className="icon" >
                    {item.icon}
                  </div>
                  <span className="label" style={{ display: isOpen ? 'none' : 'block' }}>
                    {item.title}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="data">
            {SidebarData.map((item, index) => (
              <div key={index}>
                <NavLink
                  onClick={() => showSubMenu(index)}
                  to={item.path}
                  className="link"
                  activeclassname="active"
                >
                  <div className="" style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <div className="icon " >
                      {item.icon}
                    </div>
                    <span className="label" style={{ display: isOpen ? 'none' : 'block' }}>
                      {item.title}
                    </span>
                  </div>
                </NavLink>
                {item.subMenu && subMenus[index] && (
                  <div className="submenu">
                    {item.subMenu.map((subItem, subIndex) => (
                      <NavLink
                        to={subItem.path}
                        key={subIndex}
                        className="link"
                        activeclassname="active"
                      >
                        <div className="icon">
                          {subItem.icon}
                        </div>
                        <span className="label" style={{ display: isOpen ? 'none' : 'block' }}>
                          {subItem.title}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      </div>

      <main>
        {children}
        <Outlet />
  
      </main>
    </div>
  );
};

export default SideBar;
