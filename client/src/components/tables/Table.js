import React, { useMemo, useState, useEffect } from "react";

import TableCSS from "../style/Table.module.css";

import PopUp from "./PopUp";
import { StyledDataGrid, StyledButton } from "../StyledComponent";
import {
    faCircleInfo,
    faPlus,
    faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormCSS from "../style/Form.module.css";
import { Icon, Toolbar } from "@mui/material";
import { ExportButton } from "../ExportButton";
import { DetailColumn } from "./DetailColumn";
import { useNavigate } from "react-router-dom";
import {
    GridToolbar,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarDensitySelector,
    GridPagination,
} from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
import DeptAddCar from "../../pages/admin/DeptAddCar";

const Table = ({
    hasExtraCol,
    uploadFileButton,
    externalButtons,
    title,
    dataLink,
    columnSet,
    rowID,
}) => {
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
        return idCounter;
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

    const statusColumn = {
        field: "isRegis",
        headerName: "TÌNH TRẠNG",
        width: 150,
        renderCell: (params) => (
            <div className={TableCSS.statusContainer}>
                {params.value === 0 ? (
                    <div className={TableCSS.regis}>Chưa đăng kiểm</div>
                ) : (
                    <div className={TableCSS.noRegis}>Đã đăng kiểm</div>
                )}
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

    let newCols;
    if (hasExtraCol) {
        newCols = [...columns, statusColumn, detailColumn];
    } else {
        newCols = [...columns];
    }

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
            </GridToolbarContainer>
        );
    }

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
            </GridToolbarContainer>
        );
    }

    const [showImport, setShowImport] = useState(false);
    const processImport = () => {
        setShowImport(true);
    };

    const processCloseUpload = () => {
        setShowImport(false);
    };

    const closeImport = () => {
        setShowImport(false);
    };

    return (
        <div className={TableCSS.gridContainer}>
            <div className={TableCSS.title}>{title}</div>
            <div className={TableCSS.externalBtn}>
                <ExportButton data={data} />
                {externalButtons && (
                    <StyledButton
                        variant="contained"
                        // component="span"
                        className={TableCSS.uploadButton}
                        endIcon={
                            <Icon>
                                <FontAwesomeIcon
                                    icon={faUpload}
                                    className={FormCSS.ButtonIcon}
                                />
                            </Icon>
                        }
                        onClick={processImport}
                    >
                        Nhập file
                    </StyledButton>
                )}

                <DeptAddCar showImport={showImport} closeImport={closeImport} />
            </div>
            <div className={TableCSS.container}>
                <div style={{ width: "80%" }}>
                    <StyledDataGrid
                        density="comfortable"
                        slots={{
                            toolbar: CustomToolbar,
                            pagination: GridPagination,
                            loadingOverlay: LinearProgress,
                        }}
                        rows={data}
                        columns={newCols}
                        getRowId={getRowId}
                        autoHeight={true}
                        disableRowSelectionOnClick
                        rowHeight={45}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 25 } },
                            columns: {
                                columnVisibilityModel: {
                                    // Hide columns status and traderName, the other columns will remain visible
                                    address: false,
                                },
                            },
                        }}
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
