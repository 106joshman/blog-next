"use client";
import { Box, Pagination } from "@mui/material";
import React from "react";

const pageSize = 6;

export default function AppPagination() {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{ p: 2 }}
    >
      <Pagination color="primary" count={5} />
    </Box>
  );
}
