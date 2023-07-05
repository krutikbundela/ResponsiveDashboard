import React from "react";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { red, blue, pink, green, grey } from "@mui/material/colors";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ArrowDropDown, Search } from "@mui/icons-material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "./Parties.css";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



const Parties = () => {
  return (
    <>
      <Paper
        elevation={6}
        sx={{
          // backgroundColor:'lightpink',
          height:{md:'auto' , sm:'auto' , xs:'auto'},
          width: "98%",
          ml: 0.1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 1,
            }}
          >
            <ContactPhoneIcon
              alignItems="center"
              sx={{ color: red[400], m: "auto" }}
            />

            <Typography varient="h4" width={200} fontWeight={700}>
              Import Parties
              <Typography varient="subtitle1" fontSize={13} color={"grey"}>
                Use Contacts from your Phone Or Gmail to Create Parties
              </Typography>
            </Typography>
            <ArrowRightIcon
              sx={{
                color: red[400],
                m: "auto",
              }}
            />
          </Paper>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: 1,
            mt: 4,
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <Search />
          </IconButton>
          <Button
            className="party"
            size="small"
            sx={{ mr: 1 }}
            startIcon={<ControlPointIcon />}
            endIcon={<ArrowDropDown />}
            variant="contained"
          >
            Add Party
          </Button>
        </Box>

        <Box>
        <Box sx={{ height:{md:355 , sm:'auto' , xs:'auto'}, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>

        </Box>
      </Paper>
    </>
  );
};

export default Parties;
