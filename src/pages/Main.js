import * as React from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DetailCard from "../components/DetailCard";
import Data from "../data/Data";

export default function Saldo() {
  const data = Data();
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Navbar />
          <DetailCard data={data} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
