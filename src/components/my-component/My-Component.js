import "./styles.css";
import ReactPhoto from "./logo192.png";
import IconButtons from "../buttons/iconbuttons";

const MyComponent = () => {
  return (
    <div className="twoColumns">
      <img src={ReactPhoto} alt="React" />
      <div className="MyHeader">
        <p className="MyName">Sam Wilk</p>
        <p className="accentNote">Software Engineer</p>
        {/* Make thest guys little buttons */}
        <a target="_blank" href="https://www.unf.edu" rel="noreferrer">
          <p className="accentNote"> University of North Floirda</p>
        </a>
        <p className="accentNote">Computer Science, BS</p>
        <div>
          <IconButtons
            className="Iconbutton"
            icon="github"
            iconLink="https://github.com/SamWilk"
          />
          <IconButtons
            className="Iconbutton"
            icon="linkedin"
            iconLink="https://www.linkedin.com/in/sam-wilk-a66314210/"
          />
          <IconButtons className="Iconbutton" icon="email" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
