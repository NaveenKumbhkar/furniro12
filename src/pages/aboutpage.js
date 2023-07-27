import "../styles/aboutpage.css";
import logo from "../images/logo.png";
import img1 from "../images/about_img.webp";
import Certification from "../components/certification";

function AboutPage() {
  return (
    <div>
      <div className="about_banner_section">
        <div>
          <img alt="" className="about_logo" src={logo} /> <br />
          <span className="about_title">about us</span>
        </div>
      </div>
      <div className="about_story_section">
        <div className="sub_story_section1">
          <img alt="" src={img1} className="sub_story_section1_img" />
        </div>
        <div className="sub_story_section2">
          <p className="sub_story_section_title1">SHOPIFY STORY</p>
          <p className="sub_story_section_title2">
            The first Shopify store was our own
          </p>
          <p className="sub_story_section_para">
            Over a decade ago, we started a store to sell snowboards online.
            None of the ecommerce solutions at the time gave us the control we
            needed to be successful—so we built our own. Today, businesses of
            all sizes use Shopify, whether they’re selling online, in retail
            stores, or on-the-go.Over a decade ago, we started a store to sell
            snowboards online. None of the ecommerce solutions at the time gave
            us the control we needed to be successful—so we built our own.
            Today, businesses of all sizes use Shopify, whether they’re selling
            online, in retail stores, or on-the-go.
          </p>
        </div>
      </div>
      <div className="about_mission_section">
          <p className="about_mission_section_title1">our mission</p>
          <p className="about_mission_section_title2">
            Making commerce better for everyone
          </p>
          <p className="about_mission_section_para">
            We help people achieve independence by making it easier to start,
            run, and grow a business. We believe the future of commerce has more
            voices, not fewer, so we’re reducing the barriers to business
            ownership to make commerce better for everyone.
          </p>
        </div>
        <Certification/>
    </div>
  );
}

export default AboutPage;
