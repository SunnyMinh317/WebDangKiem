import React, { useMemo, useState, useEffect, useRef } from "react";
import {
    useBlockLayout,
    useTable,
    useSortBy,
    useFilters,
    useFlexLayout,
    usePagination,
} from "react-table";
import { COLUMNS } from "./Columns";
import TableCSS from "../style/Table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faArrowDown,
    faSort,
    faAngleLeft,
    faAngleRight,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import PopUp from "./PopUp";

const Table = ({ title, dataLink, columnSet }) => {
    const columns = useMemo(() => columnSet, []);
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(dataLink);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    const handleRowClick = (row) => {
        setOpenModal(true);
        setSelectedRow(row.original);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    const [sortColumn, setSortColumn] = useState("");
    const [sortDirection, setSortDirection] = useState("");

    const tableInstance = useTable(
        { columns, data, initialState: { pageSize: 15 } },
        useFilters,
        useSortBy,
        //useFlexLayout,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        setPageSize,
        prepareRow,
    } = tableInstance;

    const { pageIndex, pageSize } = state;

    const handleSort = (column) => {
        if (sortColumn === column) {
            if (sortDirection === "asc") {
                setSortColumn(column);
                setSortDirection("desc");
                tableInstance.setSortBy([{ id: column, desc: true }]);
            } else {
                setSortColumn("");
                setSortDirection("");
                tableInstance.setSortBy([]);
            }
        } else {
            setSortColumn(column);
            setSortDirection("asc");
            tableInstance.setSortBy([{ id: column, desc: false }]);
        }
    };

    return (
        <div className={TableCSS.container}>
            <div className={TableCSS.title}>
                <h1>{title}</h1>
            </div>
            <table {...getTableProps()} className={TableCSS.table}>
                <thead className={TableCSS.thead}>
                    {headerGroups.map((headerGroups) => (
                        <tr
                            {...headerGroups.getHeaderGroupProps()}
                            className={TableCSS.tableHeaderRow}
                        >
                            {headerGroups.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        tableInstance.sortBy
                                    )}
                                >
                                    {column.render("Header")}
                                    <FontAwesomeIcon
                                        icon={faSort}
                                        onClick={() => handleSort(column.id)}
                                        className={TableCSS.sortBtn}
                                    />
                                    <span className={TableCSS.arrowSpan}>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <FontAwesomeIcon
                                                    icon={faArrowUp}
                                                    className={
                                                        TableCSS.arrowIcon
                                                    }
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    icon={faArrowDown}
                                                    className={
                                                        TableCSS.arrowIcon
                                                    }
                                                />
                                            )
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faArrowUp}
                                                className={TableCSS.invisible}
                                            />
                                        )}
                                    </span>
                                    <div className={TableCSS.filterDiv}>
                                        {column.canFilter
                                            ? column.render("Filter")
                                            : null}
                                    </div>
                                </th>
                            ))}
                            <th>Chi tiết</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <>
                                <tr {...row.getRowProps}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                    <td className={TableCSS.detail}>
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            className={TableCSS.detailBtn}
                                            onClick={() => handleRowClick(row)}
                                        />
                                    </td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>

            {selectedRow && (
                <PopUp
                    isOpen={openModal}
                    closeModal={closeModal}
                    data={selectedRow}
                    columns={columnSet}
                />
            )}

            <div className={TableCSS.pageMenuContainer}>
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[15, 50, 100].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <div className={TableCSS.pageMenu}>
                    <div
                        onClick={() => previousPage()}
                        className={TableCSS.pageBtn}
                    >
                        <FontAwesomeIcon
                            icon={faAngleLeft}
                            disabled={!canPreviousPage}
                            className={TableCSS.prevBtn}
                        />
                        <span>Prev</span>
                    </div>
                    <span>
                        Page {pageIndex + 1} / {pageOptions.length}
                    </span>
                    <div
                        onClick={() => nextPage()}
                        className={TableCSS.pageBtn}
                    >
                        <span className={TableCSS.nextBtn}>Next</span>
                        <FontAwesomeIcon
                            icon={faAngleRight}
                            disabled={!canNextPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
