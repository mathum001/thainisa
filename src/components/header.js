import { Link } from "react-router-dom";
import Logo from "../pictures/thai-nisa.png";
import "./header.css";

export function HomeHeader() {
  return (
    <>
      <header className="homeHeader">
        <img src={Logo} alt="logo" style={{ width: "100%", height: "300px" }} />
      </header>
      <nav className="navBar">
        <Link to="/">Hem</Link>
        <div className="restaurants">
          <Link to="/backa">Backaplan</Link>
          <Link to="/kinna">Kinna</Link>
          <Link to="/minten">Minten</Link>
        </div>
        <Link to="/menu">Meny</Link>
      </nav>
    </>
  );
}
