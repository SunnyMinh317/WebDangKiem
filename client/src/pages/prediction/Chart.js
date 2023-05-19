import { useState } from "react";
// import "./App.css";
import BarChart from "./BarChart";
import { UserData } from "./Data";

function Chart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div> 
    </div>
  );
}

export default Chart;
