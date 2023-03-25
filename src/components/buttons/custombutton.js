import "./custombutton.css";

/**
 * Props should be sent as a object with
 * @param {*} value
 * @param {*} className
 * @returns
 */
const CustomButton = ({ value, className }) => {
  return <button className={className ?? "None"}>{value}</button>;
};

export default CustomButton;
