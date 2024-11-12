// src/pages/UploadPurchaseInvoice.jsx
import UploadPage from "../components/UploadPage";

const UploadPurchaseInvoice = () => {
  const handleFileUpload = (file) => {
    console.log("Purchase Invoice File Uploaded:", file);
    // Handle file upload logic here
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Upload Purchase Invoice
      </h2>
      <UploadPage onFileUpload={handleFileUpload} />
    </div>
  );
};

export default UploadPurchaseInvoice;
