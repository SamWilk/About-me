import IconButtons from "../../components/buttons/iconbuttons";
import "./mobile.css";

const Mobile = () => {
  return (
    <div className="sorryText">
      <p>Sorry, I haven't made the mobile version of this site yet!</p>
      <p>Please revisit on a computer or tablet</p>
      <p>
        You can always contact me through these ways if you cannot access a
        computer as well
      </p>
      <div className="icons">
        <span className="iconSpan">
          <p className="ptag">linkedin</p>
          <IconButtons
            className="Iconbutton"
            icon="linkedin"
            iconLink="https://www.linkedin.com/in/sam-wilk-a66314210/"
          />
        </span>
        <span className="iconSpan">
          <p className="ptag">email</p>
          <IconButtons className="Iconbutton" icon="email" />
        </span>
      </div>
    </div>
  );
};

export default Mobile;
