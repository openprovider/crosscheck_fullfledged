// src/components/InvoiceForm.jsx
import PropTypes from "prop-types";

const InvoiceForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          New Purchase Details
        </h2>

        {/* From Section */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">From</label>
          <div className="flex space-x-4">
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="from"
                value="Supplier"
                className="mr-2"
              />
              Supplier
            </label>
          </div>
        </div>

        {/* Supplier and PO No. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-gray-700">Supplier</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
              required
            />
          </div>
          <div>
            <label className="text-gray-700">PO No.</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
              required
            />
          </div>
        </div>

        {/* Invoice Details Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Invoice Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-gray-700">Invoice Date</label>
            <input
              type="date"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
              required
            />
          </div>
          <div>
            <label className="text-gray-700">Invoice Number</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
              required
            />
          </div>
          <div>
            <label className="text-gray-700">GST No</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
            />
          </div>
        </div>

        {/* Update Inventory and File Upload */}
        <div className="mb-6">
          <label className="flex items-center text-gray-700">
            <input type="checkbox" className="mr-2" />
            Update Inventory Stock
          </label>
          <div className="mt-4">
            <label className="text-gray-700">Invoice File</label>
            <input
              type="file"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
              accept=".png,.jpeg,.jpg,.gif,.pdf"
            />
            <p className="text-sm text-gray-500 mt-1">
              Upload only png, jpeg, jpg, gif or pdf files (Max: 2MB)
            </p>
          </div>
        </div>

        {/* Raw Material Details */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Raw Material Details
        </h2>
        <table className="min-w-full mb-4 border border-gray-300 bg-gray-50 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300 text-gray-700">Name</th>
              <th className="p-2 border border-gray-300 text-gray-700">Qty</th>
              <th className="p-2 border border-gray-300 text-gray-700">Unit</th>
              <th className="p-2 border border-gray-300 text-gray-700">
                Price
              </th>
              <th className="p-2 border border-gray-300 text-gray-700">
                Amount
              </th>
              <th className="p-2 border border-gray-300 text-gray-700">
                Tax (%)
              </th>
              <th className="p-2 border border-gray-300 text-gray-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
                />
              </td>
              <td className="p-2 border border-gray-300">
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
                />
              </td>
              <td className="p-2 border border-gray-300">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
                />
              </td>
              <td className="p-2 border border-gray-300">
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
                />
              </td>
              <td className="p-2 border border-gray-300">
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
                />
              </td>
              <td className="p-2 border border-gray-300">
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
                />
              </td>
              <td className="p-2 border border-gray-300">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-700"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};
InvoiceForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default InvoiceForm;
