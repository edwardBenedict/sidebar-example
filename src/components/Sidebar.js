import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebarStyle from "./Sidebar.module.css";
import { FiAlignCenter } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { sidebarItems } from "../helpers/SidebarItem";
import { IconContext } from "react-icons";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const sidebarToggle = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={sidebarStyle.sidebar}>
          <Link to="#" className={sidebarStyle.menuBars}>
            <FiAlignCenter onClick={sidebarToggle} />
          </Link>
        </div>
        <nav
          className={
            sidebar ? sidebarStyle.navMenu : sidebarStyle.navMenuActive
          }
        >
          <ul className={sidebarStyle.navMenuItems} onClick={sidebarToggle}>
            <li className={sidebarStyle.sidebarToggle}>
              <Link to="#" className={sidebarStyle.closeMenu}>
                <AiOutlineClose />
              </Link>
            </li>
            {sidebarItems.map((sidebar, index) => (
              <li key={index} className={sidebarStyle[sidebar.cName]}>
                <Link to={sidebar.path}>
                  {sidebar.icon}
                  <span>{sidebar.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
