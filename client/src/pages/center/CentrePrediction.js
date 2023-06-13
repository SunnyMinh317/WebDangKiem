import { React, useContext} from "react";
import HeaderCenter from "../../components/HeaderCenter";
import MainLayoutCSS from "../style/MainLayout.module.css";
import Chart from "../../components/Chart";
import { AuthContext } from "../../context/authContext";
import LoginPopup from "../../components/LoginPopup";
const CentrePrediction = () => {
    const { currentUser } = useContext(AuthContext);

    if(!currentUser || currentUser.isAdmin != 0){
        return (
            <div className={MainLayoutCSS.container}>
            <HeaderCenter className={MainLayoutCSS.header}/>
            <div className={MainLayoutCSS.contentWrap}>
                <LoginPopup/>
            </div>
        </div>
        )
    }

    return (
        <div className={MainLayoutCSS.container}>
            <HeaderCenter />
            <div className={MainLayoutCSS.centerContainer}>
                <div className={MainLayoutCSS.graphContainer}>
                    <Chart isAdmin={true}/>
                </div>
            </div>
        </div>
    );
};
export default CentrePrediction;
