import "./Aboutme.css";
import resume from "../../resume/my-resume.pdf";
import IconButtons from "../buttons/iconbuttons";
import Experience from "../experience/Experience";
import DivBar from "../stlyecomponents/divbar";

const Aboutme = () => {
  const skillArray = [
    "ViteJs",
    "React",
    "NodeJs",

    "Java",
    "JavaScript",
    "Css",
    "Git",
    "Github",
    "C#",
    "ASP.net",
    "Azure",
    "Docker",
    "Express Js",
    "Python",
    "C",
    "Bicep",
    "Postgres SQL",
    "MQSQL/T-SQL",
  ];

  const splitSkillArray = [];
  while (skillArray.length !== 0) {
    splitSkillArray.push(skillArray.splice(0, 1));
  }

  return (
    <div className="Container">
      <h1 id="ContainerTitle" className="ContainerTitle">
        About Me, Sam
      </h1>
      <div className="ParaContainer">
        <p className="AboutPara">
          As you can imagine my name is, Sam Wilk, I am a Software Engineer.
          This site will give you a overview of me, my academic achievements, my
          professional skills, and personal projects.
        </p>
        <p className="AboutPara">
          A few things to point on, I am very passionate about what I do and
          enjoy working on projects like this site as well as new and exciting
          technology. I have come to love working with frameworks like React,
          Next, Vue, dotnet, and Vite.
        </p>
        <p className="AboutPara">
          I love being outside anything having to do with fishing, hunting,
          training dogs, sports, and working out you name it.
        </p>
        <p className="AboutPara">
          Check out my{" "}
          <a href={resume} target="_blank" rel="noreferrer">
            <b className="resumeTag">Resume</b>
          </a>
        </p>
        <div>
          <DivBar />
          <Experience />
          <DivBar />
        </div>
        <span className="span">
          <h2>Here are a handful of skills I have</h2>
          <div className="skillBracket">
            {splitSkillArray.map((array, idx) => {
              return (
                <div className="skillColumn" key={idx}>
                  {array.map((value, ids) => {
                    return (
                      <div className="skillCard" key={ids}>
                        <IconButtons
                          className="IconbuttonNSSmall"
                          icon={value.toLowerCase()}
                        />
                        {value}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Aboutme;
