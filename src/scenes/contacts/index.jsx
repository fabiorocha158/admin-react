import { Box, useTheme, Typography, Toolbar } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {mockDataContacts} from "../../data/mockData";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import { ImportantDevices } from "@mui/icons-material";
const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const columns = [
        { field: "id", headerName:"ID"},
        { field: "registrarId", headerName:"Reg. ID"},
        { field: "name", headerName:"Name", flex:1, cellClassName:"name-column--cell"},
        { field: "age", headerName:"Age", type: "number", headerAlign:"left", align:"left"},
        { field: "phone", headerName:"Phone", flex:1},
        { field: "email", headerName:"E-mail", flex:1},
        { field: "address", headerName:"Address", flex:1},
        { field: "city", headerName:"City", flex:1, cellClassName:"city-column--cell"},
        { field: "zipCode", headerName:"ZipCode", flex:1, cellClassName:"zipcode-column--cell"},
    ]

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="CONTACTS" subtitle="Let´s talk about your bussiness." />
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
                    }}
                    >
                    <DataGrid
                        rows={mockDataContacts}
                        columns={columns}
                        components={{ Toolbar: GridToolbar }} 
                    />
                </Box>
        </Box>
    )
}

export default Contacts;