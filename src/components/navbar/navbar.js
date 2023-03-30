import LinkButton from "../buttons/linkbutton";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="NavBar">
      <div className="nav-div">
        <div className="nav-div2">
          About me, Sam
          <LinkButton
            id="Home"
            value="Home"
            path="#Top"
            className="Linkbutton"
          />
          <LinkButton
            id="About Me"
            value="About Me"
            path="#Aboutme"
            className="Linkbutton"
          />
          <LinkButton
            id="Projects"
            value="Github Projects"
            path="#GitHub"
            className="Linkbutton"
          />
          <LinkButton
            id="Skills"
            value="Contact Info"
            path="/"
            className="Linkbutton"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
