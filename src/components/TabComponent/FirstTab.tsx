import { useGetUserPostQuery } from "@/redux/apiSlice";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function FirstTab() {
  const userId = useSelector(
    (state: any) => state.persistedReducer.user.user._id
  );

  const { data: posts }: any = useGetUserPostQuery(userId);

  const response = posts?.data;

  return (
    <div className="w-full flex flex-col sm:grid gap-4 sm:grid-cols-2 mt-2">
      {response?.map((item: any) => (
        <div
          key={item.id}
          className="block maxw-[18rem] rounded-lg bg-white border border-[1px_solid_rgba(230_230_230_1)]"
        >
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <Image
              src="/image.jpg"
              alt="User Image"
              height={200}
              width={350}
              style={{ height: "200px", width: "100%" }}
              className="rounded-t-lg"
            ></Image>
          </div>

          <div className="p-2">
            <div className="">
              <Link href="/">
                <h2 className="font-bold text-base md:text-xl">{item.title}</h2>
                <p className="mt-2 leading-6 line-clamp-3 text-justify">
                  {item.description}
                </p>
              </Link>
            </div>
            <div className="py-4">
              <ul className="flex items-center space-x-3">
                {item?.tags?.map((tag: any) => (
                  <li key={tag} className="bg-gray-200 rounded-full px-3 py-1">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
