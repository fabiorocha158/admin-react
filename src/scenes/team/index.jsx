import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {mockDataTeam} from "../../data/mockData";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const columns = [
        { field: "id", headerName:"ID"},
        { field: "name", headerName:"Name", flex:1, cellClassName:"name-column--cell"},
        { field: "age", headerName:"Age", type: "number", headerAlign:"left", align:"left"},
        { field: "phone", headerName:"Phone", flex:1},
        { field: "email", headerName:"E-mail", flex:1},
        { 
            field: "access", 
            headerName:"Access LEvel", 
            flex:1, 
            renderCell: ({ row: {access} }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]    
                        }
                        borderRadius="4px"
                    >
                        { access === "admin"  && <AdminPanelSettingsOutlined />}
                        { access === "manager"  && <SecurityOutlined />}
                        { access === "user"  && <LockOpenOutlined />}
                        <Typography
                            color={colors.grey[100]} 
                            sx={{ml:"5px"}}
                        >
                            {access}
                        </Typography>

                    </Box>
                )
            }
        },




    ]

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="TEAMS" subtitle="This is your greate team." />
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
                    }}
                    >
                    <DataGrid
                        rows={mockDataTeam}
                        columns={columns} 
                    />
                </Box>
        </Box>
    )
}

export default Team;