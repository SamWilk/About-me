import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import DivBar from "../stlyecomponents/divbar";

const Experience = () => {
  const [experinces, setExperinces] = useState();
  // Call Api to get data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.sam-wilk.com/experince");
      const body = await res.json();
      setExperinces(body);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>Professional Experience</h2>
      {experinces !== undefined ? <div>Done Loading</div> : <Loading />}
    </div>
  );
};

export default Experience;
