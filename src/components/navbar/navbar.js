import CustomButton from "../buttons/custombutton";

const Navbar = () => {
  return (
    <nav>
      Navbar here
      <CustomButton props={{ value: "home", isSubmit: true }} />
    </nav>
  );
};

export default Navbar;
