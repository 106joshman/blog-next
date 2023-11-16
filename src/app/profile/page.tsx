"use client";

import UserBoard from "@/components/Dasboard/UserBoard";
import UserList from "@/components/Dasboard/UserList";
import { dispatchUser } from "@/redux/userSlice";
import { apiBaseURL } from "@/utils/fetchLink";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// export const metadata = {
//   title: "Dasboard",
//   description: "User profile board",
// };

export default function Profilepage() {
  const token = useSelector((state: any) => state.accessToken);

  const dispatch = useDispatch();
  if (token) {
    const getUser = async () => {
      try {
        const response = await axios.get(`${apiBaseURL}/users/current`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(dispatchUser(response.data.user));

        console.log(response.data);
      } catch (error) {
        console.log("Encounter this", error);
      }
    };

    getUser();
  }

  console.log(token);
  return (
    <div className="sm:container mx-auto">
      <div className="pt-[6rem] "></div>
      <div className="flex min-h-screen max-w-7xl mx-auto">
        <UserBoard />
        <UserList />
      </div>
    </div>
  );
}

// export async function getStaticProps(token:string) {

//   const userData = await axios.get(`${apiBaseURL}/users/current`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }
