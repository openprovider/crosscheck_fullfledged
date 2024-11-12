// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddSupplierForm from "./components/AddSupplierForm";
import ViewSuppliers from "./components/ViewSuppliers";

function App() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const renderContent = () => {
    switch (selectedItem) {
      case "Dashboard":
        return <h2 className="text-white">Dashboard</h2>;
      case "Add Supplier":
        return <AddSupplierForm />;
      case "View and Modify Suppliers":
        return <ViewSuppliers setSelectedItem={setSelectedItem} />;
      default:
        return <h2 className="text-white">{selectedItem}</h2>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setSelectedItem={setSelectedItem} />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 bg-gray-800">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;
