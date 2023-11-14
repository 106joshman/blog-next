import UserBoard from "@/components/Dasboard/UserBoard";
import UserList from "@/components/Dasboard/UserList";

export const metadata = {
  title: "Dasboard",
  description: "User profile board",
};

export default function Profilepage() {
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
