import { React} from "react";
import HeaderCenter from "../../components/HeaderCenter";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Chart from "../../components/Chart";
const CentrePrediction = () => {

    return (
        <div className={MainLayoutCSS.container}>
            <HeaderCenter />
            <div className={MainLayoutCSS.centerContainer}>
                <div className={MainLayoutCSS.graphContainer}>
                    <Chart/>
                </div>
            </div>
        </div>
    );
};
export default CentrePrediction;
