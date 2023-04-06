import React, {useMemo, useState, useEffect} from 'react';
import { useBlockLayout, useTable, useSortBy, useFilters, useFlexLayout, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './Columns';
import TableCSS from '../../../style/Table.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


import { ReactDOM } from 'react';
import { Table } from '@mui/material';

const CarList = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState('');

    const tableInstance = useTable({columns, data}, useFilters, useSortBy, useFlexLayout, usePagination)

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
        prepareRow
    } = tableInstance

    const {pageIndex, pageSize} = state

    const handleSort = (column) => {
        if (sortColumn === column) {
            if (sortDirection === 'asc') {
            setSortColumn(column);
            setSortDirection('desc');
            tableInstance.setSortBy([{ id: column, desc: true }]);
            } else {
            setSortColumn('');
            setSortDirection('');
            tableInstance.setSortBy([]);
            }
        } else {
            setSortColumn(column);
            setSortDirection('asc');
            tableInstance.setSortBy([{ id: column, desc: false }]);
        }
    };

    return (
        <div className={TableCSS.container}>
            <table {...getTableProps()} className={TableCSS.table}>
                <thead>
                    {
                        headerGroups.map((headerGroups) => (
                                <tr {...headerGroups.getHeaderGroupProps()} >
                                    {headerGroups.headers.map((column) => (
                                        <th {...column.getHeaderProps(tableInstance.sortBy)} className={`${column.id}`}>
                                            {column.render('Header')}
                                            <FontAwesomeIcon icon={faFilter} onClick={()=>handleSort(column.id)} className={TableCSS.sortBtn}/>
                                            <span className={TableCSS.arrowSpan}>
                                                {column.isSorted ?
                                                    (column.isSortedDesc? <FontAwesomeIcon icon={faArrowUp} className={TableCSS.arrowIcon}/> : <FontAwesomeIcon icon={faArrowDown} className={TableCSS.arrowIcon}/>) : <FontAwesomeIcon icon={faArrowUp} className={TableCSS.invisible}/>
                                                }
                                            </span>
                                            <div className={TableCSS.filterDiv}>
                                                {column.canFilter ? column.render('Filter') : null}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            )
                        )
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>

            <div className={TableCSS.pageMenu}>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10,50,100].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <span>
                    Page {pageIndex + 1} / {pageOptions.length}
                </span>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>PREV</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>NEXT</button>
            </div>
        </div>
        
    );
};

export default CarList;