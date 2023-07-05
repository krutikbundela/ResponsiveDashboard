import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

const ProductDetails = ({ selectedProduct }) => {
  // console.log("vytfiy"+ selectedProduct)

  return (
    <>
      <Box
        sx={{
          width: "70%",
          height: "95vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selectedProduct ? (
          <Card>
            <CardContent>
              <Box sx={{ width: 300, height: 300 }}>
                <Typography variant="h2" component="h1" mt={2}  align="center">
                  {selectedProduct?.Name}
                </Typography>
                <Typography variant="h4" component="h1" mt={10} align="center">
                  {selectedProduct?.Price}
                </Typography>
                <Typography variant="h4" component="h1" mt={10} mb={3} align="center">
                  {selectedProduct?.id}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h4" component="h1" mt={10} align="center">
            Select to see product
          </Typography>
        )}
      </Box>
    </>
  );
};

export default ProductDetails;
