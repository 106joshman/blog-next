import { BiSolidLogOutCircle } from "react-icons/bi";

export function Logout({ onClick }: any) {
  return (
    <>
      <button className="p-3 flex items-center" onClick={onClick}>
        <BiSolidLogOutCircle className="text-xl mr-2" /> Log Out
      </button>
    </>
  );
}

