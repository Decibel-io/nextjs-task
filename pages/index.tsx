import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import Table from "../components/Table";
import Header from "../components/Header";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Header />
        <Table />
        <Typography variant="h6" component="h1" gutterBottom textAlign={'end'}>
          Material UI - Next.js with TypeScript
        </Typography>
      
    </Container>
  );
}
