// src/components/Sidebar.jsx
import { useState } from "react";
import {
  FaTachometerAlt,
  FaFileInvoiceDollar,
  FaUserFriends,
  FaClipboardCheck,
} from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`h-screen bg-gray-900 text-white transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-center p-4 text-xl">
        {isExpanded ? "Logo" : "L"} {/* Replace with your actual logo */}
      </div>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer">
          <FaTachometerAlt />
          {isExpanded && <span>Dashboard</span>}
        </li>

        <li className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer">
          <FaFileInvoiceDollar />
          {isExpanded && (
            <div className="flex flex-col">
              <span className="flex items-center gap-2">
                Purchase Invoices <AiFillCaretDown />
              </span>
              <div className="pl-6 mt-2 text-sm">
                <p>Upload</p>
                <p>View Past Invoices</p>
              </div>
            </div>
          )}
        </li>

        <li className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer">
          <FaFileInvoiceDollar />
          {isExpanded && (
            <div className="flex flex-col">
              <span className="flex items-center gap-2">
                Selling Invoices <AiFillCaretDown />
              </span>
              <div className="pl-6 mt-2 text-sm">
                <p>Upload</p>
                <p>View Past Invoices</p>
              </div>
            </div>
          )}
        </li>

        <li className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer">
          <FaUserFriends />
          {isExpanded && (
            <div className="flex flex-col">
              <span className="flex items-center gap-2">
                Suppliers <AiFillCaretDown />
              </span>
              <div className="pl-6 mt-2 text-sm">
                <p>Add</p>
                <p>Remove</p>
                <p>View and Modify Suppliers</p>
              </div>
            </div>
          )}
        </li>

        <li className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer">
          <FaUserFriends />
          {isExpanded && (
            <div className="flex flex-col">
              <span className="flex items-center gap-2">
                Consumers <AiFillCaretDown />
              </span>
              <div className="pl-6 mt-2 text-sm">
                <p>Add</p>
                <p>Remove</p>
                <p>View and Modify Consumers</p>
              </div>
            </div>
          )}
        </li>

        <li className="flex items-center gap-4 p-4 hover:bg-gray-700 cursor-pointer">
          <FaClipboardCheck />
          {isExpanded && <span>Crosscheck Reconciliation</span>}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
