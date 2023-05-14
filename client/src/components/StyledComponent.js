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

export const StyledDataGrid = styled(DataGrid)({
    height: "100%",
    width: "100%",

    "& .MuiDataGrid-columnHeader": {
        backgroundColor: "transparent",
        color: "var(--black)",
        marginBottom: "5px",
    },

    "& .MuiDataGrid-columnHeaderTitle": {
        fontWeight: "bold",
    },

    "& .MuiDataGrid-columnFooter": {
        backgroundColor: "var(--sec-dark)",
        color: "var(--white)",
    },

    "& .MuiDataGrid-row": {
        backgroundColor: "var(--white)",

        marginBottom: "5px",

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
    border: "0px solid transparent",
    fontSize: "0.7rem",

    fontFamily: "titi",

    "@media (max-width: 600px)": {
        "& .MuiDataGrid-row": {
            
            whiteSpace: "nowrap",
        },
    },
      
});
