import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import axios from "axios";
import { CarData } from "./Data";

function Chart() {
  const [loading, setLoading] = useState(true);
  const [UserData, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const response = await axios.get('/dept/getRegByYear');
        setData(response.data);
        
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  console.log(UserData)
  console.log(CarData)

  const [userDatas, setUserDatas] = useState({
    labels: CarData.map((data) => data.year),
    datasets: [
      {
        label: "Số xe hết hạn",
        data: CarData.map((data) => data.new_reg_count),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  });

  // console.log(userDatas.labels);

  // setUserData(
  //   {
  //     labels: UserData.map((data) => data.year),
  //     datasets: [
  //       {
  //         label: "Số xe hết hạn",
  //         data: UserData.map((data) => data.new_reg_count),
  //         backgroundColor: [
  //           "rgba(75,192,192,1)",
  //         ],
  //         borderColor: "black",
  //         borderWidth: 1,
  //         borderRadius: 5,
  //       },
  //     ],
  //   }
  // )

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userDatas} />
      </div> 
    </div>
  );
}

export default Chart;
