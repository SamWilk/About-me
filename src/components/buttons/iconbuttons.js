import {
  FaGithubSquare,
  FaLinkedin,
  FaAt,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiCsharp,
  SiDigitalocean,
  SiNginx,
  SiVite,
  SiJavascript,
  SiCss3,
  SiGit,
  SiMicrosoftazure,
  SiDocker,
  SiDotnet,
  SiPython,
  SiC,
  SiExpress,
  SiMicrosoftsqlserver,
  SiArm,
} from "react-icons/si";
/**
 * Takes a Icon picture and a respective link
 * Must have iconLink to work
 * @param {*} icon
 * @param {*} iconLink
 * @param {*} iconLink
 * @returns
 */
const IconButtons = ({ icon, iconLink, className }) => {
  switch (icon) {
    case "deployed":
      return (
        <>
          <div className={className}>
            <SiDigitalocean className={className} />
          </div>
          <div className={className}>
            <SiNginx className={className} />
          </div>
        </>
      );
    case "bicep":
      return (
        <div className={className}>
          <SiArm className={className} />
        </div>
      );
    case "java":
      return (
        <div className={className}>
          <FaJava className={className} />
        </div>
      );
    case "mqsql/t-sql":
      return (
        <div className={className}>
          <SiMicrosoftsqlserver className={className} />
        </div>
      );
    case "express js":
      return (
        <div className={className}>
          <SiExpress className={className} />
        </div>
      );
    case "c":
      return (
        <div className={className}>
          <SiC className={className} />
        </div>
      );
    case "python":
      return (
        <div className={className}>
          <SiPython className={className} />
        </div>
      );
    case "asp.net":
      return (
        <div className={className}>
          <SiDotnet className={className} />
        </div>
      );
    case "docker":
      return (
        <div className={className}>
          <SiDocker className={className} />
        </div>
      );
    case "azure":
      return (
        <div className={className}>
          <SiMicrosoftazure className={className} />
        </div>
      );
    case "git":
      return (
        <div className={className}>
          <SiGit className={className} />
        </div>
      );
    case "css":
      return (
        <div className={className}>
          <SiCss3 className={className} />
        </div>
      );
    case "javascript":
      return (
        <div className={className}>
          <SiJavascript className={className} />
        </div>
      );
    case "vitejs":
      return (
        <div className={className}>
          <SiVite className={className} />
        </div>
      );
    case "c#":
      return (
        <div className={className}>
          <SiCsharp className={className} />
        </div>
      );
    case "postgres sql":
      return (
        <div className={className}>
          <SiPostgresql className={className} />
        </div>
      );
    case "nextjs":
      return (
        <div className={className}>
          <SiNextdotjs className={className} />
        </div>
      );
    case "nodejs":
      return (
        <div className={className}>
          <FaNodeJs className={className} />
        </div>
      );
    case "react":
      return (
        <div className={className}>
          <FaReact className={className} />
        </div>
      );
    case "github":
      return (
        <a
          className={className}
          href={iconLink}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className={className} />
        </a>
      );
    case "linkedin":
      return (
        <a
          className={className}
          href={iconLink}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={className} />
        </a>
      );
    case "email":
      return (
        <a
          id="Aboutme"
          className={className}
          href="mailto: samwilk18@yahoo.com"
        >
          <FaAt className={className} />
        </a>
      );
    default:
      return <></>;
  }
};

export default IconButtons;
