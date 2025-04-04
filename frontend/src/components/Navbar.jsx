import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
      <Link to="/" style={{ margin: "10px", color: "#fff" }}>Home</Link>
      <Link to="/login" style={{ margin: "10px", color: "#fff" }}>Login</Link>
      <Link to="/dashboard" style={{ margin: "10px", color: "#fff" }}>Dashboard</Link>
    </nav>
  );
};

export default Navbar;
