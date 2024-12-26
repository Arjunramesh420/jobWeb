import React from "react";
import { Typography, Box } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";

const Blog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <BuildIcon sx={{ fontSize: "100px", color: "#ffcc00" }} />
      <Typography variant="h4" sx={{ marginTop: "20px", fontWeight: "bold" }}>
        This page is under development. Check back soon!
      </Typography>
    </Box>
  );
};

export default Blog;
