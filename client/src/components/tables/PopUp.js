import React from "react";
import PopUpCSS from "../style/PopUp.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUp = ({ isOpen, closeModal, data, columns }) => {
    if (!isOpen) {
        return null;
    }

    // console.log(data);

    return (
        <div className={PopUpCSS.container}>
            <div className={PopUpCSS.content}>
                <div className={PopUpCSS.closeBtnContainer}>
                    <button onClick={closeModal} className={PopUpCSS.closeBtn}>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className={PopUpCSS.closeBtnIcon}
                        />
                    </button>
                </div>

                {columns.map((column) => {
                    console.log(data.ownerId);
                    return (
                        <div key={data.ownerId} className={PopUpCSS.infoLine}>
                            <div>{column.headerName}: </div>
                            <div className={PopUpCSS.infoContent}>{data[column.field]}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopUp;
// {`${column.headerName}: ${
//     data[column.field]
// }`}