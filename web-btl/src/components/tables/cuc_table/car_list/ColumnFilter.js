import React from "react";
import TableCSS from '../../../style/Table.module.css'

export const ColumnFilter = ({column}) => {
    const {filterValue,setFilter} = column
    return (
        <span>
            <input 
                value = {filterValue || ''} 
                onChange = {(e) => setFilter(e.target.value)} 
                placeholder="Search:"
                className={TableCSS.filterInput}
            />
        </span>
    )
}