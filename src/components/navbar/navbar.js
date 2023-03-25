import CustomButton from "../buttons/custombutton";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="NavBar">
      <div className="nav-div">
        About me, Sam
        <CustomButton id="Home" value="Home" className="HoverButton" />
        <CustomButton id="About Me" value="About Me" className="HoverButton" />
        <CustomButton id="Skills" value="Skills" className="HoverButton" />
      </div>
    </nav>
  );
};

export default Navbar;
