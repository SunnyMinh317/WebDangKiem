import {React, useContext} from "react";
import HeaderCenter from "../../components/HeaderCenter";
import AddCarForm from "../../components/AddCarForm";
import MainLayoutCSS from "../style/MainLayout.module.css";
import { AuthContext } from "../../context/authContext";
import LoginPopup from "../../components/LoginPopup";

const Profile = () => {
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
        <div>
            <HeaderCenter className={MainLayoutCSS.header} />
            <div className={MainLayoutCSS.profileContainer}>
                <div>
                    <div className={MainLayoutCSS.profileTitle}>TÊN TRUNG TÂM</div>
                    <div className={MainLayoutCSS.contentWrap}>
                        <div className={MainLayoutCSS.profilePicContainer}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                                className={MainLayoutCSS.profilePic}
                            />
                        </div>
                        <div className={MainLayoutCSS.profileInfo}>
                            <div className={MainLayoutCSS.profileInfoLines}>
                                <span className={MainLayoutCSS.profileInfoHeader}>Thành phố:</span>
                                <span className={MainLayoutCSS.profileInfoContent}>Họ và tên</span>
                            </div>
                            <div className={MainLayoutCSS.profileInfoLines}>
                                <span className={MainLayoutCSS.profileInfoHeader}>Quận:</span>
                                <span className={MainLayoutCSS.profileInfoContent}>Họ và tên</span>
                            </div>
                            <div className={MainLayoutCSS.profileInfoLines}>
                                <span className={MainLayoutCSS.profileInfoHeader}>Email:</span>
                                <span className={MainLayoutCSS.profileInfoContent}>Họ và tên</span>
                            </div>
                            <div className={MainLayoutCSS.profileInfoLines}>
                                <span className={MainLayoutCSS.profileInfoHeader}>Mật khẩu:</span>
                                <span className={MainLayoutCSS.profileInfoContent}>Họ và tên</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
