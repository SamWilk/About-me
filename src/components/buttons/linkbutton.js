import "./custombutton.css";

/**
 * Props should be sent as a object with
 * @param {*} value
 * @param {*} className
 * @returns
 */
const LinkButton = ({ value, className, path }) => {
  return (
    <button className={className ?? "None"}>
      {path !== undefined ? <a href={path}>{value}</a> : <></>}
    </button>
  );
};

export default LinkButton;
