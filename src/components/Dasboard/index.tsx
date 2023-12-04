"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { apiBaseURL } from "@/utils/fetchLink";
import UserBoard from "@/components/Dasboard/UserBoard";
import UserList from "@/components/Dasboard/UserList";
import { dispatchUpdateUser } from "@/redux/userSlice";

const getUser = async (token: string) => {
  try {
    const response = await axios.get(`${apiBaseURL}/users/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    console.error("Encounter this", error);
  }
};

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector((state: any) => state.persistedReducer.user.access_token);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          setIsLoading(true);
          const response = await getUser(token);
          setUserData(response);
          dispatch(dispatchUpdateUser({
            user: response,
            access_token: ''
          }));
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          router.push("/auth/login");
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [token, dispatch, router]);

  return (
    <div className="sm:container mx-auto">
      <div className="pt-[4rem] lg:pt-[6rem]"></div>
      <div className="flex min-h-screen max-w-7xl mx-auto">
        {!isLoading && (
          <>
            <UserBoard userData={userData} />
            <UserList userData={userData} />
          </>
        )}
      </div>
    </div>
  );
}
