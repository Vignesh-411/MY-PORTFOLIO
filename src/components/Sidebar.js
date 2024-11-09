import React from 'react';
import '../css/Sidebar.css'; // Import CSS file for styling
import { NavLink } from "react-router-dom";
import Home from '../Images/SidebarImages/home.png';
import Projects from '../Images/SidebarImages/project.png';
import About from '../Images/SidebarImages/about.png';
import Contact from '../Images/SidebarImages/contact.png';
// 2nd set
import Home2 from '../Images/SidebarImages/home2.png';
import Projects2 from '../Images/SidebarImages/project2.png';
import About2 from '../Images/SidebarImages/about2.png';
import Contact2 from '../Images/SidebarImages/contact2.png';
const Sidebar = ({isOpen}) => {
  
  return (
    <div>
    
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="navlinks2">
        
          <nav>

          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
  {({ isActive }) => (
    <img src={isActive ? Home2 : Home} alt={isActive ? 'Home2 Active' : 'Home'} />
  )}
</NavLink>
          <NavLink to="/Projects" className={({ isActive }) => (isActive ? 'active' : '')}>
  {({ isActive }) => (
    <img src={isActive ? Projects2 : Projects} alt={isActive ? 'Projects2 Active' : 'Projects'} />
  )}
</NavLink>
          <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
  {({ isActive }) => (
    <img src={isActive ? About2 : About} alt={isActive ? 'About2 Active' : 'About'} />
  )}
</NavLink>
          <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : '')}>
  {({ isActive }) => (
    <img src={isActive ? Contact2 : Contact} alt={isActive ? 'Contact2 Active' : 'Contact'} />
  )}
</NavLink>



          </nav>
      
        </div>
      </div>
    </div>
  );
};

export default Sidebar;