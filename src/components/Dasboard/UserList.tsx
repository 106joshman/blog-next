import { BiDotsHorizontalRounded } from "react-icons/bi";
import Tabs from "../TabComponent/Tabs";
import Image from "next/image";
import Avatars from "../Avatar";

interface Props {
  userData?: any;
}

export default function UserList({ userData }: Props) {
  return (
    <div className="p-5 lg:min-w-[700px] lg:ml-[280px] xl:ml-[370px] flex-grow">
      <div className="my-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between minw-[300px] lg:minw-[600px] lg:p-2">
            <div className="lg:hidden flex">
              <Avatars height={"200px"} width={"200px"} />
            </div>

            {/* <Image
              src="/image.jpg"
              alt="User Image"
              height={200}
              width={200}
              style={{ height: "100px", width: "100px" }}
              className="rounded-full "
            ></Image> */}

            <div className="ml-4">
              <h2 className="text-[4vw] lg:mb-3 capitalize lg:hidden font-semibold">
                {userData?.name}
              </h2>
              <span className="mb-3 text-sm lg:hidden sm:text-base text-[#757575]">
                0 Subscribers
              </span>
            </div>
          </div>

          <button>
            <BiDotsHorizontalRounded
              className="text-[#757575] font-bold"
              size={22}
            />
          </button>
        </div>

        <div className="my-5">
          <Tabs />
        </div>
      </div>
    </div>
  );
}
