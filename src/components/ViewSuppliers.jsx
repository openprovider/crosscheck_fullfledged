// src/components/ViewSuppliers.jsx
import PropTypes from "prop-types";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const suppliers = [
  {
    id: 1,
    name: "Ambika Mirchi Shop",
    type: "Both",
    email: "",
    company: "Ambika Mirchi Shop",
    phone: "",
    gstNo: "",
    fssaiNo: "",
    status: "Active",
  },
  {
    id: 2,
    name: "Misc",
    type: "Both",
    email: "",
    company: "Misc",
    phone: "",
    gstNo: "",
    fssaiNo: "",
    status: "Active",
  },
  {
    id: 3,
    name: "Prabhu Agencies",
    type: "Both",
    email: "",
    company: "Prabhu Agencies",
    phone: "",
    gstNo: "",
    fssaiNo: "",
    status: "Active",
  },
  // Add more supplier objects as needed
];

const ViewSuppliers = ({ setSelectedItem }) => {
  const handleAddNew = () => {
    setSelectedItem("Add Supplier"); // Redirects to Add Supplier form
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Suppliers</h2>
        <button
          onClick={handleAddNew}
          className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          <FaPlus className="mr-2" />
          Add New Supplier/Third Party
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border border-gray-300">Select</th>
              <th className="p-2 border border-gray-300">Name</th>
              <th className="p-2 border border-gray-300">Type</th>
              <th className="p-2 border border-gray-300">Email</th>
              <th className="p-2 border border-gray-300">Company</th>
              <th className="p-2 border border-gray-300">Phone</th>
              <th className="p-2 border border-gray-300">Status</th>
              <th className="p-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="hover:bg-gray-100">
                <td className="p-2 border border-gray-300 text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border border-gray-300 text-gray-700">
                  {supplier.name}
                </td>
                <td className="p-2 border border-gray-300 text-gray-700">
                  {supplier.type}
                </td>
                <td className="p-2 border border-gray-300 text-gray-700">
                  {supplier.email}
                </td>
                <td className="p-2 border border-gray-300 text-gray-700">
                  {supplier.company}
                </td>
                <td className="p-2 border border-gray-300 text-gray-700">
                  {supplier.phone}
                </td>
                <td className="p-2 border border-gray-300 text-green-600">
                  {supplier.status}
                </td>
                <td className="p-2 border border-gray-300 text-center space-x-2">
                  <button className="p-1 text-green-500 hover:text-green-700">
                    <FaEdit />
                  </button>
                  <button className="p-1 text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ViewSuppliers.propTypes = {
  setSelectedItem: PropTypes.func.isRequired,
};

export default ViewSuppliers;
