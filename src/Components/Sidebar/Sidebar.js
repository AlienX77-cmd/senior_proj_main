import React, { useState } from "react";
import "./Sidebar.css";
import Logo_bank from "../../imgs/logo_bank.png";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const handleItemClick = (index) => {
    setSelected(index === selected ? null : index);
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo_bank} alt="logo" />
          <span>
            St<span>o</span>nk
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <NavLink
              to={item.path}
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </NavLink>
          ))}
          {/* signoutIcon */}
          <div className="menuItem"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
