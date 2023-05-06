"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export interface props {
  children: ReactNode;
}

export default function Provider({ children }: props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="transition-colors duration-300">{children}</div>
    </ThemeProvider>
  );
}
