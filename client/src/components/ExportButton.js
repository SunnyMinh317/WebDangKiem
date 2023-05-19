import React from "react";
import { StyledButton } from "./StyledComponent";
import FormCSS from "./style/Form.module.css"
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";
import { useState } from "react";
import { Icon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ExportButton = ({ data }) => {
    const [filename, setFilename] = useState("data.csv");

    const handleExport = () => {
        // Build the CSV content
        const header = Object.keys(data[0]).join(",") + "\r\n";
        const rows = data.map((row) => Object.values(row).join(",") + "\r\n");
        const content = header + rows.join("");

        // Create a Blob object from the CSV content
        const blob = new Blob([content], { type: "text/csv;charset=utf-8" });

        // Download the file using FileSaver.js library
        saveAs(blob, filename);
    };

    return (
        <StyledButton
            variant="contained"
            endIcon={
                <Icon>
                    <FontAwesomeIcon
                        icon={faFileExport}
                        className={FormCSS.ButtonIcon}
                    />
                </Icon>
            }
            onClick={handleExport}
        >
            XUẤT FILE
        </StyledButton>
    );
};
