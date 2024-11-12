// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-white shadow-md flex justify-between items-center">
      <div className="text-2xl font-semibold text-primary">PROCYS</div>
      <div className="flex space-x-8 text-dark font-medium">
        <a href="#solutions" className="hover:text-primary">
          Solutions
        </a>
        <a href="#integrations" className="hover:text-primary">
          Integrations
        </a>
        <a href="#resources" className="hover:text-primary">
          Resources
        </a>
        <a href="#pricing" className="hover:text-primary">
          Pricing
        </a>
      </div>
      <button className="text-primary hover:text-blue-700">Log in</button>
    </nav>
  );
};

export default Navbar;
