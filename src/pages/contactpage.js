import "../styles/contactpage.css";
import logo from "../images/logo.png";

function ContactPage() {
  return (
    <div>
      <div className="contact_banner_section">
        <div>
          <img className="contact_logo" src={logo} /> <br />
          <span className="contact_title">contact</span>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
