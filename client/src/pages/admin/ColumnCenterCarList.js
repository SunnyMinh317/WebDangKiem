import { ColumnFilter } from "../../components/tables/ColumnFilter";

export const ColumnCenterCarList = [
    {
        Header: "ownerId",
        accessor: "ownerId",
        Filter: ColumnFilter,
    },
    {
        Header: "Biển số",
        accessor: "licensePlate",
        Filter: ColumnFilter,
    },
    {
        Header: "Hãng xe",
        accessor: "brand",
        Filter: ColumnFilter,
    },
    {
        Header: "Dòng xe",
        accessor: "model",
        Filter: ColumnFilter,
    },
    {
        Header: "Trung tâm đăng kiểm",
        accessor: "centreName",
        Filter: ColumnFilter,
    },
    {
        Header: "Thành phố",
        accessor: "centreCity",
        Filter: ColumnFilter,
    },
    {
        Header: "Ngày đăng kiểm",
        accessor: "registrationDate",
        Filter: ColumnFilter,
    },
];
