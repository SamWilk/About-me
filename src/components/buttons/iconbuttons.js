import { FaGithubSquare, FaLinkedin, FaAt } from "react-icons/fa";
/**
 * Takes a Icon picture and a respective link
 * Must have iconLink to work
 * @param {*} icon
 * @param {*} iconLink
 * @param {*} iconLink
 * @returns
 */
const IconButtons = ({ icon, iconLink, className }) => {
  if (icon === "github") {
    return (
      <a className={className} href={iconLink} target="_blank" rel="noreferrer">
        <FaGithubSquare />
      </a>
    );
  }

  if (icon === "linkedin") {
    return (
      <a className={className} href={iconLink} target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    );
  }

  if (icon === "email") {
    return (
      <a className={className} href="mailto: samwilk18@yahoo.com">
        <FaAt />
      </a>
    );
  }

  return <></>;
};

export default IconButtons;
