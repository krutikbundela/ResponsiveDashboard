import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDown = ({ productsName, Product, setProduct }) => {
  return (
    <Box
      sx={{
        width: "30%",
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="select-label">Products</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={Product}
          label="Products"
          onChange={(e) => setProduct(e.target.value)}
        >
          {productsName.map((productName, index) => {
            return (
              <MenuItem key={index} value={productName}>
                {productName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
