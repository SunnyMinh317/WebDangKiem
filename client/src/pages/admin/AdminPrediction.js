import { React} from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Chart from "../../components/Chart";
const AdminPrediction = () => {
    return (
        <div className={MainLayoutCSS.container}>
            <HeaderAdmin />
            <div className={MainLayoutCSS.centerContainer}>
                <div className={MainLayoutCSS.graphContainer}>
                    <Chart/>
                </div>
            </div>
        </div>
    );
};
export default AdminPrediction;
