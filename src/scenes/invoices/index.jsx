import { Box, useTheme, Typography} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {mockDataInvoices} from "../../data/mockData";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const columns = [
        { field: "id", headerName:"ID"},
        { field: "name", headerName:"Name", flex:1, cellClassName:"name-column--cell"},
        { field: "email", headerName:"E-mail", flex:1},
        { 
            field: "cost", 
            headerName:"Cost",
            flex:1, 
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            )
        },
        { field: "phone", headerName:"Phone"},
        { field: "date", headerName:"Data"},
    ]

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="INVOICES" subtitle="Manager yours invocice to customers." />
            </Box>
            <Box
                    height="70vh"
                    sx={{
                        "& .MuiDataGrid-root":{
                            border: "none"
                        },
                        "& .MuiDataGrid-cell":{
                            borderBottom: "none"
                        },
                        "& .name-column--cell":{
                            color: colors.greenAccent[300]
                        },
                        "& .MuiDataGrid-columnHeaders":{
                            backgroundColor: colors.blueAccent[700]
                        },
                        "& .MuiDataGrid-virtualScroller":{
                            backgroundColor: colors.primary[400]
                        },
                        "& .MuiDataGrid-footContainer":{
                            borderTop:"none",
                            backgroundColor: colors.blueAccent[700]
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                            color: `${colors.grey[100]} !important`
                        },
                        "& .MuiCheckbox-root":{
                            color: `${colors.greenAccent[200]} !important`
                        },
                    }}
                    >
                    <DataGrid
                        checkboxSelection
                        rows={mockDataInvoices}
                        columns={columns}
                        components={{ Toolbar: GridToolbar }} 
                    />
                </Box>
        </Box>
    )
}

export default Invoices;