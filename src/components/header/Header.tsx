import "./Header.scss";
import banner from "../../assets/banner.png";

export default function Header() {
    return (
        <div className="header-container">
            <img src={banner} alt="Cinema world" className="-banner" />
        </div>
    );
}
