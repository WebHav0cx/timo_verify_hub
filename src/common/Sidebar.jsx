import React, { useState } from "react";
import { Icon } from "@iconify/react";
import profile from "../assets/profile.png";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (link === "payments") {
      setIsPaymentsOpen(!isPaymentsOpen);
    }
  };

  return (
    <div className="h-screen flex">
      <nav
        className={`sidebar relative top-0 left-0 h-full bg-green-900 text-white ${
          collapsed ? "w-16" : "w-72"
        } transition-all duration-300 flex flex-col`}
      >
        {/* Sidebar Top */}
        <div className="sidebar-header flex items-center justify-between h-16 px-4">
          <a
            href="#"
            className="logo flex items-center gap-3 text-lg font-bold"
          >
            <img
              src={profile}
              alt="Verify Hub Logo"
              className="logo w-12 h-12 rounded-md object-cover"
            />
            {!collapsed && (
              <span className="company-name text-xl font-bold">Verify Hub</span>
            )}
            {/* Show ellipsis when collapsed */}
            {collapsed && (
              <Icon icon="mdi:ellipsis-horizontal" className="text-xl" />
            )}
          </a>
          <button
            className="toggle-btn flex items-center justify-center w-10 h-10 rounded-full bg-green-800 border border-green-700"
            onClick={toggleCollapse}
          >
            {/* Change the icon based on collapsed state */}
            <Icon
              icon={
                collapsed
                  ? "iconamoon:arrow-right-2-light"
                  : "iconamoon:arrow-left-2-light"
              }
              className="text-xl transition-transform"
            />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="menu px-4 py-2 flex-grow overflow-y-auto">
          {/* Main Menu Section */}
          <h4
            className={`text-sm font-semibold uppercase text-green-400 px-3 ${
              collapsed && "hidden"
            }`}
          >
            Main Menu
          </h4>
          <ul className="menu-list space-y-2 mt-2">
            <li>
              <a
                href="#dashboard"
                className={`menu-item flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeLink === "dashboard"
                    ? "bg-green-700"
                    : "hover:bg-green-800"
                }`}
                onClick={() => handleLinkClick("dashboard")}
              >
                <Icon icon="mdi:home-outline" className="text-lg" />
                {!collapsed && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a
                href="#payments"
                className={`menu-item flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeLink === "payments"
                    ? "bg-green-700"
                    : "hover:bg-green-800"
                }`}
                onClick={() => handleLinkClick("payments")}
              >
                <Icon icon="mdi:bank-outline" className="text-lg" />
                {!collapsed && <span>Payments/Purchase</span>}
                <Icon
                  icon="mdi:chevron-down"
                  className={`ml-auto transform ${
                    isPaymentsOpen ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                />
              </a>
              {!collapsed && isPaymentsOpen && (
                <ul className="pl-6 mt-1 space-y-1 list-disc">
                  <li>
                    <a
                      href="#income"
                      className="block text-sm p-2 rounded hover:bg-green-700"
                    >
                      Income
                    </a>
                  </li>
                  <li>
                    <a
                      href="#expenses"
                      className="block text-sm p-2 rounded hover:bg-green-700"
                    >
                      Expenses
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Other Menu Section */}
          <h4
            className={`text-sm font-semibold uppercase text-green-400 px-3 pt-2 ${
              collapsed && "hidden"
            }`}
          >
            Other Menu
          </h4>
          <ul className="menu-list space-y-2 mt-2">
            <li>
              <a
                href="#settings"
                className={`menu-item flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeLink === "settings"
                    ? "bg-green-700"
                    : "hover:bg-green-800"
                }`}
                onClick={() => handleLinkClick("settings")}
              >
                <Icon icon="mdi:cogs" className="text-lg" />
                {!collapsed && <span>Settings</span>}
              </a>
            </li>
            <li>
              <a
                href="#help"
                className={`menu-item flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeLink === "help" ? "bg-green-700" : "hover:bg-green-800"
                }`}
                onClick={() => handleLinkClick("help")}
              >
                <Icon icon="mdi:help-circle-outline" className="text-lg" />
                {!collapsed && <span>Help</span>}
              </a>
            </li>
            {/* More menu items can go here */}
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer p-4 flex items-center">
          <img
            src={profile}
            alt="Verify Hub Logo"
            className="w-12 h-12 rounded-full"
          />
          {!collapsed && (
            <div className="ml-3">
              <p className="font-semibold">Verify Hub</p>
              <p className="text-sm text-green-400">@verify.hub</p>
            </div>
          )}
          <button className="ml-auto text-red-500">
            <Icon icon="mdi:logout" className="text-lg" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
