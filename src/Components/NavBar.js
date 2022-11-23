import React from 'react'
import "./NavBar.css"
import {Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div>
    <nav className="navbar">
     {/*LOGO*/}
     <div className="logo">MARCO</div>
     {/* NAVIGATION MENU */}
     <ul className="nav-links">
      <div className="menu">
      {/*NAVIGATION MENUS*/}
         <li className="nav-item">
            <Link className="nav-link" to="/">
               Admin <i className="material-symbols-outlined">admin_panel_settings</i>
            </Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/">
               Usuarios <i className="material-symbols-outlined">group</i>
            </Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/">
               Guias <i className="material-symbols-outlined">info</i>
            </Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/">
               Reservaciones <i className="material-symbols-outlined">calendar_month</i>
            </Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/">
               Actividades <i className="material-symbols-outlined">sprint</i>
            </Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/">
               Exposiciones <i className="material-symbols-outlined">slideshow</i>
            </Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/ObrasRA">
               ObrasRA <i className="material-symbols-outlined">smartphone</i>
            </Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/">
               Logout <i className="material-symbols-outlined">logout</i>
            </Link>
         </li>
      </div>
     </ul>
   </nav>
    </div>
  )
}

export default NavBar