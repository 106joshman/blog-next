import Image from "next/image";
import Link from "next/link";

const article = [
  {
    id: 0,
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
    id: 2,
    title: "Article Title 3",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem porro praesentium quasi. Recusandae nihilsoluta laboriosam magni labore. Enim nobis sit officiis natus dolorem placeat, ipsam, iusto ad error amet ducimus eligendi odit aut! Aspernatur quia dignissimos eligendi, quam sint exeos. Excepturi illo eum pariatur voluptatum eos debitis.",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: 3,
    title: "Article Title 4",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem porro praesentium quasi. Recusandae nihilsoluta laboriosam magni labore. Enim nobis sit officiis natus dolorem placeat, ipsam, iusto ad error amet ducimus eligendi odit aut! Aspernatur quia dignissimos eligendi, quam sint exeos. Excepturi illo eum pariatur voluptatum eos debitis.",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: 4,
    title: "Article Title 5",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem porro praesentium quasi. Recusandae nihilsoluta laboriosam magni labore. Enim nobis sit officiis natus dolorem placeat, ipsam, iusto ad error amet ducimus eligendi odit aut! Aspernatur quia dignissimos eligendi, quam sint exeos. Excepturi illo eum pariatur voluptatum eos debitis.",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
];
export default function FirstTab() {
  return (
    <div className="w-full flex flex-col sm:grid gap-4 sm:grid-cols-2 mt-2">
      {article.map((item) => (
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
                  {item.shortDescription}
                </p>
              </Link>
            </div>
            <div className="py-4">
              <ul className="flex items-center space-x-3">
                {item.tag.map((tag, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 rounded-full px-3 py-1"
                  >
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
