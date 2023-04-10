import { useEffect, useState } from "react";
import Loading from "../loading/Loading";

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

  const ExoCard = (exp) => {
    console.log(exp.props);
    const card = exp.props;
    return (
      <div>
        <h2>{card.role}</h2>
        <h3>
          {card.workplace}
          {card.currentpostion === true ? <>, Current Postion</> : <></>}
        </h3>
      </div>
    );
  };

  return (
    <div>
      <h1>Professional Experience</h1>
      {experinces === undefined ? (
        <Loading />
      ) : (
        <>
          {experinces.map((obj) => {
            return <ExoCard key={obj.id} props={obj} />;
          })}
        </>
      )}
    </div>
  );
};

export default Experience;
