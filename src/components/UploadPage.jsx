// src/components/UploadPage.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import InvoiceForm from "./InvoiceForm";

const UploadPage = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showManualForm, setShowManualForm] = useState(false); // State to control form visibility

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (onFileUpload) {
      onFileUpload(file);
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Plus icon to upload file */}
      <div
        onClick={handleClick}
        className="cursor-pointer flex items-center justify-center w-24 h-24 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
      >
        <FaPlus className="text-4xl text-gray-700" />
      </div>
      <input
        id="fileInput"
        type="file"
        accept=".pdf,.html,.xml,.csv,.txt,.json"
        className="hidden"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <p className="mt-4 text-gray-600">Selected File: {selectedFile.name}</p>
      )}
      <p className="mt-2 text-gray-500 text-sm">
        Supported formats: PDF, HTML, XML, CSV, TXT, JSON
      </p>

      {/* Add Invoice Manually Button */}
      <button
        onClick={() => setShowManualForm(true)}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Invoice Manually
      </button>

      {/* Conditionally Render Invoice Form */}
      {showManualForm && (
        <InvoiceForm onClose={() => setShowManualForm(false)} />
      )}
    </div>
  );
};
UploadPage.propTypes = {
  onFileUpload: PropTypes.func.isRequired,
};

export default UploadPage;
