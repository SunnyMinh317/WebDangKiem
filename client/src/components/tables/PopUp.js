import React from "react";
import PopUpCSS from "../style/PopUp.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUp = ({ isOpen, closeModal, data, columns }) => {
    if (!isOpen) {
        return null;
    }

    console.log(data);

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
                    console.log(column.ownerId);
                    return (
                        <p key={column.ownerId}>{`${column.Header}: ${
                            data.column
                        }`}</p>
                    );
                })}
            </div>
        </div>
    );
};

export default PopUp;
