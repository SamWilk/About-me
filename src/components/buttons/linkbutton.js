import "./custombutton.css";

/**
 * Props should be sent as a object with
 * @param {*} value
 * @param {*} className
 * @param {*} path
 * @returns
 */
const LinkButton = ({ value, className, path }) => {
  return (
    <div>
      {path !== undefined ? (
        <a href={path} className={className ?? "None"}>
          {value}
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LinkButton;
