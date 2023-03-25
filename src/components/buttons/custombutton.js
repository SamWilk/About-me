import "./custombutton.css";

/**
 * Props should be sent as a object with value as a property
 * @param {*} props
 * @returns
 */
const CustomButton = ({ props }) => {
  return <button>{props.value}</button>;
};

export default CustomButton;
