import LinkButton from "../buttons/linkbutton";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="NavBar">
      <div className="nav-div">
        About me, Sam
        <LinkButton
          id="Home"
          value="Home"
          path="#MyHeader"
          className="Linkbutton"
        />
        <LinkButton
          id="About Me"
          value="About Me"
          path="/about-me"
          className="Linkbutton"
        />
        <LinkButton
          id="Skills"
          value="Github Projects"
          path="/contact"
          className="Linkbutton"
        />
        <LinkButton
          id="Skills"
          value="Contact Info"
          path="/contact"
          className="Linkbutton"
        />
      </div>
    </nav>
  );
};

export default Navbar;
