// src/components/Sidebar.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaTachometerAlt,
  FaFileInvoiceDollar,
  FaUserFriends,
  FaClipboardCheck,
} from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const Sidebar = ({ setSelectedItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
    setSelectedItem(menu);
  };

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`h-screen bg-gray-900 text-white transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16" // Adjust width to "w-16" when collapsed
      }`}
    >
      <div className="flex items-center justify-center p-4 text-xl">
        {isExpanded ? "Logo" : "L"}
      </div>
      <ul className="mt-4 space-y-2">
        <li
          onClick={() => setSelectedItem("Dashboard")}
          className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer"
        >
          <FaTachometerAlt />
          {isExpanded && <span>Dashboard</span>}
        </li>
        {/* Purchase Invoices */}
        <li
          onClick={() => handleMenuClick("Purchase Invoices")}
          className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer"
        >
          <FaFileInvoiceDollar />
          {isExpanded && (
            <span className="flex items-center gap-2">
              Purchase Invoices <AiFillCaretDown />
            </span>
          )}
        </li>
        {isExpanded && openMenu === "Purchase Invoices" && (
          <ul className="pl-12 mt-2 text-sm">
            <li onClick={() => setSelectedItem("Upload Purchase Invoice")}>
              Upload
            </li>
            <li onClick={() => setSelectedItem("View Past Purchase Invoices")}>
              View Past Invoices
            </li>
          </ul>
        )}

        {/* Selling Invoices */}
        <li
          onClick={() => handleMenuClick("Selling Invoices")}
          className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer"
        >
          <FaFileInvoiceDollar />
          {isExpanded && (
            <span className="flex items-center gap-2">
              Selling Invoices <AiFillCaretDown />
            </span>
          )}
        </li>
        {isExpanded && openMenu === "Selling Invoices" && (
          <ul className="pl-12 mt-2 text-sm">
            <li onClick={() => setSelectedItem("Upload Selling Invoice")}>
              Upload
            </li>
            <li onClick={() => setSelectedItem("View Past Selling Invoices")}>
              View Past Invoices
            </li>
          </ul>
        )}

        {/* Suppliers */}
        <li
          onClick={() => handleMenuClick("Suppliers")}
          className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer"
        >
          <FaUserFriends />
          {isExpanded && (
            <span className="flex items-center gap-2">
              Suppliers <AiFillCaretDown />
            </span>
          )}
        </li>
        {isExpanded && openMenu === "Suppliers" && (
          <ul className="pl-12 mt-2 text-sm">
            <li onClick={() => setSelectedItem("Add Supplier")}>Add</li>
            <li onClick={() => setSelectedItem("View and Modify Suppliers")}>
              View and Modify
            </li>
          </ul>
        )}

        {/* Consumers */}
        <li
          onClick={() => handleMenuClick("Consumers")}
          className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer"
        >
          <FaUserFriends />
          {isExpanded && (
            <span className="flex items-center gap-2">
              Consumers <AiFillCaretDown />
            </span>
          )}
        </li>
        {isExpanded && openMenu === "Consumers" && (
          <ul className="pl-12 mt-2 text-sm">
            <li onClick={() => setSelectedItem("Add Consumer")}>Add</li>
            <li onClick={() => setSelectedItem("Remove Consumer")}>Remove</li>
            <li onClick={() => setSelectedItem("View and Modify Consumers")}>
              View and Modify
            </li>
          </ul>
        )}

        {/* Crosscheck Reconciliation */}
        <li
          onClick={() => setSelectedItem("Crosscheck Reconciliation")}
          className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer"
        >
          <FaClipboardCheck />
          {isExpanded && <span>Crosscheck Reconciliation</span>}
        </li>
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  setSelectedItem: PropTypes.func.isRequired,
};

export default Sidebar;
