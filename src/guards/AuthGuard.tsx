import HomePage from "@/app/page";
import React from "react";
export interface Props {
  children: Node;
}

export default function AuthGuard({ children }: Props) {
  const user = "Self";
  const token = "Self";
  
  if (user && token) {
    return <HomePage />;
  }
  return <>{children}</>;
}
