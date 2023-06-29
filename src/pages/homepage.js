import "../styles/homepage.css";
import { Link } from "react-router-dom";

function HomePage() {
return (
    <div>
        <div className="banner_img">
            <div className="hero_box">
                <div className="sub_hero_box">
                <span>New Arrival</span> <br />
                <span className="sub_hero_box_main_text">
                    Discover Our <br/> New Collection
                </span>
                <br />
                <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s.
                </span>
                <div className="sub_hero_box_button">
                    <Link to="/">buy now</Link>
                </div>
            </div>
        </div>
        </div>
    </div>
);
}

export default HomePage;
