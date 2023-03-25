/**
 * Props should be sent as a object with value as a property
 * @param {*} props
 * @returns
 */
const CustomButton = ({ props }) => {
  if (props.isSubmit) {
    // return a different component
  }

  return <button>{props.value}</button>;
};

export default CustomButton;
