import "../styles/navbar.css";
import Logo from "../images/logo.png";

function Navbar() {
    return (
    <div className="navbar">
        
        <a href="/" className="nav_logo">
            <img src={Logo} className="nav_logo_img"/>
        furniro
        </a>
        <ul>
        <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">shop</a>
        </li>
        <li>
            <a href="">about</a>
        </li>
        <li>
            <a href="">contact</a>
        </li>
        </ul>
    </div>
    );
}

export default Navbar;
