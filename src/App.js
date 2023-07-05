import React from "react";
import Sidebar from "./Dashboard/Sidebar";
// import products from "./Component/Data";
// import Dropdown from "./Component/DropDown";
// import ProductDetails from "./Component/ProductDetails";
// import Box from "@mui/material/Box";



const App = () => {
  // const [Product, setProduct] = useState("");

  // const productsName = products.map((product) => {
  //   return product.Name;
  // });

  // const selectedProduct = products.find((product) => Product === product.Name);

  return (
    <>  
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Dropdown
          productsName={productsName}
          Product={Product}
          setProduct={setProduct}
        />
        <ProductDetails selectedProduct={selectedProduct} />
      </Box> */}


<Sidebar/>

    </>
  );
};

export default App;
