export const ColumnCarList = [
    {
        headerName: "SỐ CCCD",
        field: "ownerId",
        align: "left",
        headerAlign: "left",
        width: 100,
    },
    {
        headerName: "BIỂN SỐ",
        field: "licensePlate",
        align: "left",
        headerAlign: "left",
        width: 150,
        renderCell: (params) => <strong style={{fontWeight:"900"}}>{params.value}</strong>,
    },
    {
        headerName: "HÃNG XE",
        field: "brand",
        align: "left",
        headerAlign: "left",
        width: 150,
    },
    {
        headerName: "DÒNG XE",
        field: "model",
        align: "left",
        headerAlign: "left",
        width: 150,
    },
    {
        headerName: "ĐỊA CHỈ",
        field: "address",
        align: "left",
        headerAlign: "left",
        width: 150,
    },
    {
        headerName: "TRUNG TÂM",
        field: "centreName",
        align: "left",
        headerAlign: "left",
        width: 275,
    },
    {
        headerName: "NGÀY ĐĂNG KIỂM",
        field: "registrationDate",
        align: "left",
        headerAlign: "left",
        width: 150,
    },
];

export const ColumnCenter = [
    {
        headerName: "MÃ TRUNG TÂM",
        field: "centreId",
        align: "center",
        headerAlign: "left",
        width: 150,
    },
    {
        headerName: "TÊN TRUNG TÂM",
        field: "centreName",
        align: "left",
        headerAlign: "left",
        width: 304,
    },
    {
        headerName: "THÀNH PHỐ",
        field: "centreCity",
        align: "left",
        headerAlign: "left",
        width: 150,
    },
    {
        headerName: "QUẬN",
        field: "centreDistrict",
        align: "left",
        headerAlign: "left",
        width: 150,
    },
    {
        headerName: "NGÀY THÀNH LẬP",
        field: "establishedDate",
        align: "left",
        headerAlign: "left",
        width: 225,
    },
    {
        headerName: "EMAIL",
        field: "centreEmail",
        align: "left",
        headerAlign: "left",
        width: 250,
    },
];

export const ColumnCenterCarList = [
    {
        headerName: "MÃ CHỦ SỞ HỮU",
        field: "ownerId",
        align: "left",
        headerAlign: "left",
        width: "165",
    },
    {
        headerName: "BIỂN SỐ",
        field: "licensePlate",
        align: "left",
        headerAlign: "left",
        width: "190",
    },
    {
        headerName: "HÃNG XE",
        field: "brand",
        align: "left",
        headerAlign: "left",
        width: "190",
    },
    {
        headerName: "DÒNG XE",
        field: "model",
        align: "left",
        headerAlign: "left",
        width: "190",
    },
    {
        headerName: "NGÀY ĐĂNG KIỂM",
        field: "registrationDate",
        align: "left",
        headerAlign: "left",
        width: "250",
    },
];

export const ColumnCenterRegis = [
    {
        headerName: "BIỂN SỐ",
        field: "licensePlate",
        align: "left",
        headerAlign: "left",
        width: "165",
    },
    {
        headerName: "TRUNG TÂM",
        field: "centreId",
        align: "left",
        headerAlign: "left",
        width: "200",
    },
    {
        headerName: "NGÀY ĐĂNG KIỂM",
        field: "registrationDate",
        align: "left",
        headerAlign: "left",
        width: "300",
    },
    {
        headerName: "NGÀY HẾT HẠN",
        field: "expireDate",
        align: "left",
        headerAlign: "left",
        width: "300",
    },
];
