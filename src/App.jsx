import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">
          <h2>Welcome to the Dashboard</h2>
          {/* Content based on selected section */}
        </main>
      </div>
    </div>
  );
}

export default App;
