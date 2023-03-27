import LinkButton from "../buttons/linkbutton";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="NavBar">
      <div className="nav-div">
        About me, Sam
        <LinkButton id="Home" value="Home" path="/" className="HoverButton" />
        <LinkButton
          id="About Me"
          value="About Me"
          path="/about-me"
          className="HoverButton"
        />
        <LinkButton id="Skills" value="Skills" className="HoverButton" />
      </div>
    </nav>
  );
};

export default Navbar;
