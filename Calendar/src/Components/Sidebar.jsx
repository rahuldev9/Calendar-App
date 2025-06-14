import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaClipboardList,
  FaCalendarAlt,
  FaIdBadge,
  FaFileAlt,
  FaCreditCard,
  FaUsers,
  FaBullhorn,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: <FaHome />, href: "/" },
    { label: "Programs", icon: <FaClipboardList />, href: "/" },
    { label: "Events", icon: <FaCalendarAlt />, href: "/", active: true },
    { label: "Memberships", icon: <FaIdBadge />, href: "/" },
    { label: "Documents", icon: <FaFileAlt />, href: "/" },
    { label: "Payments", icon: <FaCreditCard />, href: "/" },
    { label: "People", icon: <FaUsers />, href: "/" },
    { label: "Communication", icon: <FaBullhorn />, href: "/" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden p-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>+

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r p-4 flex flex-col justify-between transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <div>
          
          <nav className="flex flex-col gap-3 text-gray-700 text-base">
            {navItems.map(({ label, icon, href, active }) => (
              <a
                key={label}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-purple-100 transition-colors ${
                  active ? "text-purple-600 font-semibold bg-purple-50" : ""
                }`}
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="text-sm text-gray-600 mt-6 border-t pt-4">
          <div>Elijah Scott</div>
          <a href="mailto:scotteli@hey.com" className="text-blue-500 hover:underline">
            scotteli@hey.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
