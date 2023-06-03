import React, { useMemo, useState, useEffect } from "react";

import TableCSS from "../style/Table.module.css";

import PopUp from "./PopUp";
import { StyledDataGrid, StyledButton } from "../StyledComponent";
import { faCircleInfo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormCSS from "../style/Form.module.css";
import { Icon } from "@mui/material";
import { ExportButton } from "../ExportButton";
import { DetailColumn } from "./DetailColumn";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const Table = ({ externalButtons, title, dataLink, columnSet, rowID }) => {
    const columns = useMemo(() => columnSet, []);
    const [data, setData] = useState([]);

    const navigate = useNavigate();

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
        return idCounter
    };

    const detailColumn = {
        field: "detail",
        headerName: "CHI TIẾT",
        width: 100,
        renderCell: (params) => (
            <div className={TableCSS.detailIconContainer}>
                <FontAwesomeIcon
                    icon={faCircleInfo}
                    className={TableCSS.detailIcon}
                    onClick={() => {
                        handleOpenModal(params.row);
                    }}
                />
            </div>
        ),
        headerAlign: "left",
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleOpenModal = (row) => {
        console.log(row);
        setSelectedRow(row);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const newCols = [...columns, detailColumn];

    return (
        <div className={TableCSS.gridContainer}>
            <div className={TableCSS.title}>{title}</div>
            <div className={TableCSS.externalBtn}>
                {externalButtons && (
                    <StyledButton onClick={() => {navigate("/");}}
                        variant="contained"
                        endIcon={
                            <Icon>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className={FormCSS.ButtonIcon}
                                />
                            </Icon>
                        }
                        style={{ marginRight: "10px" }}
                    >
                        THÊM
                    </StyledButton>
                )}
                <ExportButton data={data} />
            </div>
            <div className={TableCSS.container}>
                <div style={{ width: "80%" }}>
                    <StyledDataGrid
                        rows={data}
                        columns={newCols}
                        // pagination={false}
                        getRowId={getRowId}
                        autoHeight={true}
                        disableRowSelectionOnClick
                        rowClassName="custom-row"
                        rowHeight={45}
                        
                    />
                </div>
            </div>
            <PopUp
                isOpen={isOpen}
                closeModal={handleCloseModal}
                data={selectedRow}
                columns={DetailColumn}
            />
        </div>
    );
};

export default Table;
