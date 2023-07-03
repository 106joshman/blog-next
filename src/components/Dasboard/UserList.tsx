import { BiDotsHorizontalRounded } from "react-icons/bi";
import Tabs from "../TabComponent/Tabs";
import Image from "next/image";

export default function UserList() {
  return (
    <div className="p-5 lg:min-w-[700px] lg:ml-[280px] xl:ml-[370px] flex-grow">
      <div className="my-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between minw-[300px] lg:minw-[600px] lg:p-2">
            <Image
              src="/image.jpg"
              alt="User Image"
              height={200}
              width={200}
              style={{ height: "100px", width: "100px" }}
              className="rounded-full lg:hidden inline-flex"
            ></Image>

            <div className="ml-2">
              <h2 className="text-[4vw] lg:mb-3 font-semibold">User Name</h2>
              <span className="mb-3 text-sm lg:hidden sm:text-base text-[#757575]">
                10 Subscribers
              </span>
            </div>
          </div>

          <button>
            <BiDotsHorizontalRounded className="text-[#757575] font-bold" size={22} />
          </button>
        </div>

        <div className="">
          <Tabs />
        </div>
      </div>
    </div>
  );
}
