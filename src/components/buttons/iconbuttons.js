import {
  FaGithubSquare,
  FaLinkedin,
  FaAt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiCsharp } from "react-icons/si";
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
    case "c#":
      return (
        <div className={className}>
          <SiCsharp className={className} />
        </div>
      );
    case "psql":
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
