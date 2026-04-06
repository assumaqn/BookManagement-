import { CiBookmark } from "react-icons/ci";
import Button from "../../ui/Button";

function RecentBook() {
  return (
    <div className="flex items-center gap-6 overflow-hidden rounded-3xl bg-neutral-50">
      <div>
        <img src="/random-2.png" alt="" className="w-[500px]" />
      </div>
      <div className="flex flex-col items-start gap-5 px-4">
        <span className="rounded-lg bg-indigo-200 px-2 py-1 text-xs text-indigo-600">
          Currently Reading
        </span>
        <h2 className="text-xl font-semibold text-gray-800">
          The Architecture of Silence
        </h2>
        <p className="px-2 text-sm leading-6 tracking-tight text-gray-500">
          Note: The Alchemist tells the story of Santiago, a young shepherd who
          dreams of finding treasure in the Egyptian desert. The novel explores
          themes of destiny, personal legend.
        </p>
        <div className="flex gap-4">
          <Button>continue Reading</Button>
          <Button icon={<CiBookmark size={20} />}>Quick note</Button>
        </div>
      </div>
    </div>
  );
}

export default RecentBook;
