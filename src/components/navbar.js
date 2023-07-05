import "../styles/navbar.css";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div className="navbar">
        
        <Link to="/" className="nav_logo">
            <img src={Logo} className="nav_logo_img"/>
        furniro
        </Link>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/shop">shop</Link>
        </li>
        <li>
            <Link to="/about">about us</Link>
        </li>
        <li>
            <Link to="/contact">contact</Link>
        </li>
        </ul>
    </div>
    );
}

export default Navbar;
