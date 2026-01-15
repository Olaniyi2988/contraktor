import { useState } from "react";
import { Navbar, Dropdown } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const location = useLocation();

  const pathTitles: Record<string, string> = {
    "/": "Dashboard",
    "/artisans": "Artisans",
    "/admin": "Admin Dashboard",
  };

  const brandTitle = location.pathname.startsWith("/artisan/")
    ? "Artisan Profile"
    : pathTitles[location.pathname] || "Dashboard";

  return (
    <div className="d-flex vh-100">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="d-flex flex-column flex-grow-1">
        <Navbar bg="light" className="px-4">
          <Navbar.Brand>{brandTitle}</Navbar.Brand>
          <Dropdown className="ms-auto">
            <Dropdown.Toggle variant="secondary">Admin</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
        <div
          className="flex-grow-1 overflow-auto p-4"
          style={{ backgroundColor: "#f8f9fa" }} 
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
