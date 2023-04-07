import { useEffect, useState } from "react";
import "./Github.css";
import IconButtons from "../buttons/iconbuttons";

const Github = () => {
  const [response, setResponse] = useState("");

  //Call Api to get data
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.sam-wilk.com/githubprojects");
      const body = await res.json();
      setResponse(body);
    }
    getData();
  }, []);

  const GitHubCard = (card) => {
    if (!card.props.showflag) {
      return <></>;
    }
    let HubCard = card.props;
    let splitGitHub = HubCard.projectlink.split("/");
    let title = splitGitHub.pop();
    console.log(HubCard);
    return (
      <a
        className="ProjectCard"
        href={HubCard.projectlink}
        target="_blank"
        rel="noreferrer"
      >
        <h2>{title}</h2>
        {HubCard.description === null ? <></> : <p>{HubCard.description}</p>}
        <span className="cardIcons">
          {HubCard.reactflag && (
            <IconButtons className="IconbuttonNoScale" icon="react" />
          )}
          {HubCard.nodejsflag && (
            <IconButtons className="IconbuttonNoScale" icon="nodejs" />
          )}
          {HubCard.nextjsflag && (
            <IconButtons className="IconbuttonNoScale" icon="nextjs" />
          )}
          {HubCard.psqlflag && (
            <IconButtons className="IconbuttonNoScale" icon="psql" />
          )}
          {HubCard.csharpflag && (
            <IconButtons className="IconbuttonNoScale" icon="c#" />
          )}
        </span>
      </a>
    );
  };

  return (
    <div className="Container">
      <h1 className="ConatinerTitle">Github Projects</h1>
      <div className="ProjectCardContainer">
        {response !== "" ? (
          <>
            {response.map((card) => {
              return <GitHubCard key={card.id} props={card} />;
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Github;
