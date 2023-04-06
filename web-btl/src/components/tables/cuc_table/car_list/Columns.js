import { useMemo } from "react";
import TableCSS from '../../../style/Table.module.css'
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    // {
    //     Header: 'STT',
    //     accessor: 'id',
    //     Filter: ColumnFilter
    // },
    {
        Header: 'Tên xe',
        accessor: 'car_name',
        Filter: ColumnFilter,
        className: 'carNameCol'
    },
    {
        Header: 'Biển số',
        accessor: 'license_plate',
        Filter: ColumnFilter,
        className: ''
    },
    {
        Header: 'Ngày đăng kiểm',
        accessor: 'registry_date',
        Filter: ColumnFilter,
        className: ''
    },
    {
        Header: 'Hạn đăng kiểm',
        accessor: 'registry_deadline',
        Filter: ColumnFilter,
        className: ''
    },
    {
        Header: 'Trung tâm đăng kiểm',
        accessor: 'center',
        Filter: ColumnFilter,
        className: ''
    }
]