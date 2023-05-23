import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import "../index.css";

export const StyledTextField = styled(TextField)({
    height: "100%",
    width: "100%",
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--dark)",
    },
});

export const StyledSelect = styled(Select)({
    height: "100%",
    width: "100%",
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--dark)",
    },
});

export const StyledButton = styled(Button)({
    height: "100%",
    backgroundColor: "var(--sec-dark)",
    color: "var(--white)",
    fontFamily: "titi",
    fontSize: "0.7rem",
    borderRadius: "10",
    fontWeight: "bold",
});
const ROW_HEIGHT = 45;
const ROW_MARGIN = 10;
const containerHeight = (9 + 1) * (ROW_HEIGHT + ROW_MARGIN);
export const StyledDataGrid = styled(DataGrid)({
    width: "100%",
    height: "200%",
    "& .MuiDataGrid-columnHeader": {
        backgroundColor: "var(--dark)",
        color: "var(--white)",
        flex: "0 0 200px",
    },

    "& .MuiDataGrid-columnHeaderTitle": {
        fontWeight: "900",
    },

    "& .MuiDataGrid-footerContainer": {
        backgroundColor: "var(--dark)",
        color: "var(--white)",
    },

    "& .MuiDataGrid-footerContainer *": {
        color: "var(--white)",
    },

    "& .MuiDataGrid-row": {
        backgroundColor: "var(--white)",
        "&:hover": {
            backgroundColor: "var(--table-grey)",
            color: "var(--black)",
        },
    },
    "& .MuiDataGrid-row.Mui-selected": {
        backgroundColor: "var(--orange)",
        color: "var(--white)",

        "&:hover": {
            backgroundColor: "var(--dark-orange)",
            color: "var(--white)",
        },
    },

    "& .MuiDataGrid-viewport": {
        maxHeight: "unset !important",
    },

    "& .MuiDataGrid-renderingZone": {
        maxHeight: "670px !important", // <= manually setting the max height, but this is not responsive
    },

    border: "0px solid transparent",
    fontSize: "0.7rem",
    fontWeight: "600",
    fontFamily: "titi",
});
