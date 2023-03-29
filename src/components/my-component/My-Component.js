import "./styles.css";
import ReactPhoto from "./logo192.png";
import Experience from "../experience/Experience";
import Github from "../github/Github";

const MyComponent = () => {
  return (
    <div className="twoColumns">
      <div className="column">
        <img src={ReactPhoto} alt="React" />
        <div>
          <p>That's me, Sam Wilk</p>
          <a target="_blank" href="https://www.unf.edu" rel="noreferrer">
            University of North Floirda
          </a>
          <p>Computer Science, BS</p>
        </div>
      </div>
      <div className="column">
        <Experience />
        <Github />
      </div>
    </div>
  );
};

export default MyComponent;
