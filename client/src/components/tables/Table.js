import React, { useMemo, useState, useEffect, useRef } from "react";

import TableCSS from "../style/Table.module.css";

import PopUp from "./PopUp";
import { StyledDataGrid, StyledButton } from "../StyledComponent";
import { faFileExport, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormCSS from "../style/Form.module.css";
import { Icon } from "@mui/material";
import { ExportButton } from "../ExportButton";

const Table = ({ externalButtons, title, dataLink, columnSet }) => {
    const columns = useMemo(() => columnSet, []);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(dataLink);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    let idCounter = 0;

    const getRowId = (row) => {
        idCounter++;
        return row.licensePlate;
    };

    console.log(columns);

    return (
        <div className={TableCSS.gridContainer}>
            <div className={TableCSS.title}>{title}</div>
            {externalButtons && (
                <div className={TableCSS.externalBtn}>
                    <StyledButton
                        variant="contained"
                        endIcon={
                            <Icon>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className={FormCSS.ButtonIcon}
                                />
                            </Icon>
                        }
                        style={{marginRight: '10px'}}
                    >
                        THÊM
                    </StyledButton>
                    <ExportButton data={data}/>
                </div>
            )}
            <div className={TableCSS.container}>
                <div style={{ width: "80%" }}>
                    <StyledDataGrid
                        rows={data}
                        columns={columns}
                        pagination
                        getRowId={getRowId}
                        autoHeight={true}
                        // showCellVerticalBorder={true}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
};

export default Table;
