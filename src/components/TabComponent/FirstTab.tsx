import Image from "next/image";
import Link from "next/link";

const article = [
  {
    id: 1,
    title: "Article Title 1",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem porro praesentium quasi. Recusandae nihilsoluta laboriosam magni labore. Enim nobis sit officiis natus dolorem placeat, ipsam, iusto ad error amet ducimus eligendi odit aut! Aspernatur quia dignissimos eligendi, quam sint exeos. Excepturi illo eum pariatur voluptatum eos debitis.",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: 1,
    title: "Article Title 2",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem porro praesentium quasi. Recusandae nihilsoluta laboriosam magni labore. Enim nobis sit officiis natus dolorem placeat, ipsam, iusto ad error amet ducimus eligendi odit aut! Aspernatur quia dignissimos eligendi, quam sint exeos. Excepturi illo eum pariatur voluptatum eos debitis.",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: 1,
    title: "Article Title 3",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem porro praesentium quasi. Recusandae nihilsoluta laboriosam magni labore. Enim nobis sit officiis natus dolorem placeat, ipsam, iusto ad error amet ducimus eligendi odit aut! Aspernatur quia dignissimos eligendi, quam sint exeos. Excepturi illo eum pariatur voluptatum eos debitis.",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: 1,
    title: "Article Title 4",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem porro praesentium quasi. Recusandae nihilsoluta laboriosam magni labore. Enim nobis sit officiis natus dolorem placeat, ipsam, iusto ad error amet ducimus eligendi odit aut! Aspernatur quia dignissimos eligendi, quam sint exeos. Excepturi illo eum pariatur voluptatum eos debitis.",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: 1,
    title: "Article Title 5",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem porro praesentium quasi. Recusandae nihilsoluta laboriosam magni labore. Enim nobis sit officiis natus dolorem placeat, ipsam, iusto ad error amet ducimus eligendi odit aut! Aspernatur quia dignissimos eligendi, quam sint exeos. Excepturi illo eum pariatur voluptatum eos debitis.",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
];
export default function FirstTab() {
  return (
    <div className="">
      {article.map(({ item }: any) => (
        <div
          key={item.id}
          className="border-b border-[1px_solid_rgba(230_230_230_1)] p-2"
        >
          <div className="flex">
            <div className="">
              <div className="">
                <Link href="/">
                  <h2 className="font-bold text-base md:text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-2 leading-6 line-clamp-3 text-justify">
                    {item.shortDescription}
                  </p>
                </Link>
              </div>
              <div className="py-8">
                <ul className="flex items-center space-x-3">
                  {item.tag.map(({ index, item }: any) => (
                    <li
                      key={index}
                      className="bg-gray-200 rounded-full px-3 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="ml-10">
              <Image
                src="/image.jpg"
                alt="User Image"
                height={200}
                width={200}
                // style={{ height: "200px", width: "200px" }}
                className=""
              ></Image>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
