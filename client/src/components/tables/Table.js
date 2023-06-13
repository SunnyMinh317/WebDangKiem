import React, { useMemo, useState, useEffect, useContext } from "react";

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
    GridToolbarExport,
    
} from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
import DeptAddCar from "../../pages/admin/DeptAddCar";
import { AuthContext } from "context/authContext";
import { logDOM } from "@testing-library/react";



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

    const [carTable, setCarTable] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const { currentUser } = useContext(AuthContext);


    const handleOpenModal = (row) => {
        console.log(row);
        setSelectedRow(row);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    let newCols;
    if (hasExtraCol && title == "DANH SÁCH XE") {
        newCols = [...columns, statusColumn, detailColumn];
    } else {
        newCols = [...columns];
    }

    function CustomToolbar() {
        const toolbarStyle = {
            color: "white",
            backgroundColor: "var(--orange)",
            padding: "12px",
            fontWeight: "500",
            fontSize: "1.02em",
            marginBottom: "12px" ,
          };
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton style={toolbarStyle} name="Custom Columns"/>
                <GridToolbarFilterButton style={toolbarStyle}name="Custom Columns"/>
                <GridToolbarDensitySelector style={toolbarStyle}/>
                <GridToolbarExport style={toolbarStyle}/>
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
                {/* <ExportButton data={data} /> */}
                { (externalButtons && currentUser.isAdmin == "1" && title == "DANH SÁCH XE") &&  (
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
                        localeText={{ 
                            toolbarColumns: " Danh sách cột",
                            toolbarFilters : "Lọc dữ liệu",

                            //csv
                            toolbarExport: "Suất dữ liệu",
                            toolbarExportCSV: 'Tải dưới dạng CSV',
                            toolbarExportPrint: '',

                            //density
                            toolbarDensity: "Kích thước hàng",
                            toolbarDensityCompact: 'Nhỏ',
                            toolbarDensityStandard: 'Vừa ',
                            toolbarDensityComfortable: 'Lớn',

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
                                    ownerId: false,
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
