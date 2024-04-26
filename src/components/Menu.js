import React, { useState } from "react";
import "./Menu.css";
import { FaPhone, FaUserTie, FaRegFolderOpen, FaBars } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { VscGraph } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Menu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setDisplayMenu(!displayMenu);
  };

  let icon;
  if (displayMenu) {
    icon = <IoCloseSharp className="icon" />;
  } else {
    icon = <FaBars className="icon" />;
  }

  return (
    <>
      <div className="menu-btn" id="menu">
        <div className="menu" id="menu burger">
          <Link className="button" onClick={toggleMenu}>
            {icon}
          </Link>
        </div>
        {displayMenu && (
          <div className="hide-btns" id="hide-btns">
            <div className="menu">
              <Link
                className="button"
                to="about"
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                <FaUserTie className="icon" />
              </Link>
            </div>
            <div className="menu">
              <Link 
                className="button"
                to="services"
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                <MdOutlineMiscellaneousServices className="icon" />
              </Link>
            </div>
            <div className="menu">
              <Link 
                className="button"
                to='skills'
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                <VscGraph className="icon" />
              </Link>
            </div>
            <div className="menu">
              <Link 
                className="button"
                to='projects'
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                <FaRegFolderOpen className="icon" />
              </Link>
            </div>
            <div className="menu">
              <Link
                className="button"
                to="certificates"
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                <GrCertificate className="icon" />
              </Link>
            </div>
            <div className="menu">
              <Link 
                className="button"
                to='contact'
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                <FaPhone className="icon" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
