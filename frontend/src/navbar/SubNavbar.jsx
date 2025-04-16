import "./Navbar.css";
import { Link } from "react-router-dom";
function SubNavbar() {
  return (
    <nav className="navbar-expand-lg navbar-light bg-color2">
      <div className="flex-b">
        <span></span>
        <span></span>
        <span></span>
        <Link className="nav-link active stext" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link active stext" aria-current="page" to="/cart">
          My Cart
        </Link>
        <Link className="nav-link active stext" aria-current="page" to="/offer">
          Offers
        </Link>
        <Link className="nav-link active stext" aria-current="page" to="/help">
          Help
        </Link>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
export default SubNavbar;
