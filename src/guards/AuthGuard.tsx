import HomePage from "@/app/page";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import AuthLayout from "@/app/auth/layout";

export interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const isLogged = useSelector(
    (state: any) => state.persistedReducer.user.isLogged
  );

  if (isLogged === true) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }
  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  );
}

export function GuestGuard({ children }: AuthGuardProps) {
  const user = useSelector((state: any) => state.persistedReducer.user.user);
  const token = useSelector(
    (state: any) => state.persistedReducer.user.access_token
  );

  if (!!user && !!token) {
    return <HomePage />;
  }
  return <>{children}</>;
}
