import Aboutme from "../../components/aboutme/Aboutme";
import Github from "../../components/github/Github";
import MyComponent from "../../components/my-component/My-Component";
import DivBar from "../../components/stlyecomponents/divbar";
import "./Home.css";

const Home = () => {
  return (
    <body id="HomeBody" className="HomeBody">
      <MyComponent />
      <DivBar />
      <div id="AboutMe">
        <Aboutme />
      </div>
      <div id="GitHub">
        <Github />
      </div>
    </body>
  );
};

export default Home;
