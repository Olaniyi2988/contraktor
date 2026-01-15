import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUser } from "react-icons/fa";
import React from "react";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

interface LinkItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  const links: LinkItem[] = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    { name: "Artisans", icon: <FaUser />, path: "/artisans" },
  ];

  return (
    <Nav
      className={`flex-column bg-dark text-white vh-100 p-3`}
      style={{ width: collapsed ? "80px" : "220px", transition: "width 0.3s" }}
    >
      <div className="mb-4 text-center">
        <h4>{collapsed ? "C" : "Contraktor"}</h4>
      </div>

      {links.map((link) => (
        <Nav.Link
          as={Link}
          to={link.path}
          key={link.name}
          className={`text-white mb-2 d-flex align-items-center ${
            location.pathname === link.path ? "bg-secondary rounded" : ""
          }`}
        >
          <span className="me-2">{link.icon}</span>
          {!collapsed && link.name}
        </Nav.Link>
      ))}

      <button
        className="btn btn-secondary mt-3"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "➡️" : "⬅️"}
      </button>
    </Nav>
  );
};

export default Sidebar;
