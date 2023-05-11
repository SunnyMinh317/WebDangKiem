import { ColumnFilter } from "../../components/tables/ColumnFilter";

export const ColumnCenterList = [
    {
        Header: "Tên trung tâm",
        accessor: "centreName",
        Filter: ColumnFilter,
    },
    {
        Header: "Địa chỉ",
        accessor: "centreCity",
        Filter: ColumnFilter,
    },{
        Header: "Ngày thành lập",
        accessor: "establishedDate",
        Filter: ColumnFilter,
    },
];
