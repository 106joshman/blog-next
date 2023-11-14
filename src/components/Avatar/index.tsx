"use client";
import { Avatar } from "@mui/material";
import React from "react";

interface Style {
  height: string;
  width: string;
}

export default function Avatars({ height, width }: Style) {
  return <Avatar alt="User Image" style={{ height, width }} />;
}
