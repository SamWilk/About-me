import CustomButton from "../buttons/custombutton";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="NavBar">
      Navbar here
      <CustomButton id="Home" props={{ value: "home" }} />
      <CustomButton id="About Me" props={{ value: "About Me" }} />
      <CustomButton id="Skills" props={{ value: "Skills" }} />
    </nav>
  );
};

export default Navbar;
