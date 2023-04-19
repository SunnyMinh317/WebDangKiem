import React from "react";
import TableCSS from "../style/Table.module.css";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        primary: {
            main: "#0E8388", // your custom primary color
        },
        secondary: {
            main: "#2E4F4F", // your custom secondary color
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff5ee",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        backgroundColor: "transparent",
                    },
                    fontFamily: "titi",
                },
            },
        },
    },
});

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
        <span>
            <input 
                value = {filterValue || ''} 
                onChange = {(e) => setFilter(e.target.value)} 
                placeholder="Search:"
                className={TableCSS.filterInput}
            />
            {/* <ThemeProvider theme={theme}>
                <TextField
                    value={filterValue || ""}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Search:"
                    className={TableCSS.filterInput}
                    inputProps={{
                        style: {
                            height: "10px",
                        },
                    }}
                    size="small"
                />
            </ThemeProvider> */}
        </span>
    );
};
