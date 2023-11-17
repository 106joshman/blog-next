"use client";
import React from "react";
import { Dialog, DialogActions, Typography } from "@mui/material";

interface Props {
  // setShowBar: any;
  setShow: any;
  show: any;
  onClick: any;
}

export default function LogoutModal({ show, setShow, onClick }: Props) {
  return (
    <Dialog
      open={show}
      onClose={() => setShow(true)}
      aria-labelledby="log out-prompt"
      aria-describedby="logout-dialog-description"
    >
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ p: 2, m: 2 }}
        paragraph
      >
        Do you want to log out?
      </Typography>
      <DialogActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          type="submit"
          className="bg-[#2e7d32] px-5 py-2 rounded uppercase min-w-[64px] leading-7 text-[0.9375rem] font-medium transition-colors duration-200 text-white cursor-pointer"
          onClick={() => setShow(false)}
        >
          No
        </button>
        <button
          type="submit"
          className="bg-[#d32f2f] px-5 py-2 rounded uppercase min-w-[64px] leading-7 text-[0.9375rem] font-medium transition-colors duration-200 text-white cursor-pointer"
          onClick={onClick}
        >
          Yes
        </button>
      </DialogActions>
    </Dialog>
  );
}
