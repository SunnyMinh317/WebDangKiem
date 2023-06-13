import { React, useContext, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import MainLayoutCSS from "../style/MainLayout.module.css";
import LoginPopup from "../../components/LoginPopup";
import { AuthContext } from "../../context/authContext";
import { Grid, Button, Icon } from "@mui/material";
import FormCSS from "../../components/style/Form.module.css";
import "../../components/style/importCSV.css";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const DeptAddCar = ({showImport, closeImport}) => {
    const { currentUser } = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState(null);
    if(!showImport) {
        return null;
    }
    if (!currentUser) {
        return (
            <div className={MainLayoutCSS.container}>
                <HeaderAdmin className={MainLayoutCSS.header} />
                <div className={MainLayoutCSS.contentWrap}>
                    <LoginPopup />
                </div>
            </div>
        );
    }

    const handleFileInput = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(file.name);
        const fileName = file.name;
        document.getElementById("selected-file-name").innerText = fileName;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(selectedFile);
        const formData = new FormData();
        formData.append("import-csv", selectedFile);

        axios
            .post("/csv/import-csv", formData, {})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className={MainLayoutCSS.container}>
            <form action="/import-csv" onSubmit={handleSubmit}>
                <label htmlFor="upload-excel">
                    <input
                        type="file"
                        name="upload-excel"
                        id="upload-excel"
                        accept=".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        onChange={handleFileInput}
                    />
                    <div className={FormCSS.fileUploadBtn}>
                        {" "}
                        <Button
                            variant="contained"
                            component="span"
                            endIcon={
                                <Icon>
                                    <FontAwesomeIcon
                                        icon={faUpload}
                                        className={FormCSS.ButtonIcon}
                                    />
                                </Icon>
                            }
                        >
                            Nhập file
                        </Button>
                        <div
                            className={FormCSS.selectedFileName}
                            id="selected-file-name"
                        ></div>
                    </div>
                </label>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ marginTop: "10px", marginBottom: "5px" }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!selectedFile}
                        onClick={closeImport}
                    >
                        Submit
                    </Button>
                </Grid>
            </form>
            {/* </Grid> */}
        </div>
    );
};
export default DeptAddCar;
