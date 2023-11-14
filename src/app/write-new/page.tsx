import Editor from "@/components/Text-Editor/Editor";

export const metadata = {
  title: "New Blog:The Blaq Blog.",
  description: "Create a new blog",
};

export default function Write() {
  return (
    <div className="pt-28 pb-24 max-h-fit bg-white dark:bg-[#212B36]">
      <div className="sm:container mx-auto p-5">
        <h4 className="mb-5 text-xl font-bold sm:p-6"> Create a new post</h4>
        <Editor />
      </div>
    </div>
  );
}
