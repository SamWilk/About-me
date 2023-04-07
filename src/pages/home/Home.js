import Aboutme from "../../components/aboutme/Aboutme";
import Github from "../../components/github/Github";
import MyComponent from "../../components/my-component/My-Component";
import DivBar from "../../components/stlyecomponents/divbar";
import "./Home.css";

const Home = () => {
  return (
    <div id="HomeBody" className="HomeBody">
      <MyComponent />
      <DivBar />
      <div id="AboutMe">
        <Aboutme />
      </div>
      <DivBar />
      <div id="GitHub">
        <Github />
      </div>
      <DivBar />
    </div>
  );
};

export default Home;
