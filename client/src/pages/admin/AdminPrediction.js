import { React, useContext} from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Chart from "../../components/Chart";
import LoginPopup from "../../components/LoginPopup";
import { AuthContext } from "../../context/authContext";
const AdminPrediction = () => {
    
    const { currentUser } = useContext(AuthContext);
    if(!currentUser || currentUser.isAdmin != 1){
        return (
            <div className={MainLayoutCSS.container}>
            <HeaderAdmin className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <LoginPopup/>
            </div>
        </div>
        )
    }

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
