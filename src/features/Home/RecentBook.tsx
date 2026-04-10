import { IoBookOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import Button from "../../ui/Button";
import { useBook } from "../../context/context";

function RecentBook() {
  const { vault } = useBook();

  const cuurentReading = vault[vault.length - 1];

  if (!cuurentReading)
    return (
      <div className="flex h-[30vh] w-[90%] flex-col items-center justify-center gap-9 overflow-hidden rounded-3xl bg-neutral-50 px-3 py-4 text-center">
        <span className="rounded-full bg-red-200 p-5">
          <IoBookOutline size={44} color="blue" />
        </span>
        <p className="text-md">
          You haven’t started reading any books yet. Head over to your vault to
          begin.
        </p>
      </div>
    );

  return (
    <div className="flex w-[90%] items-center gap-6 overflow-hidden rounded-3xl bg-neutral-50">
      <div>
        <img src={cuurentReading?.coverImage} alt="" className="w-[250px]" />
      </div>

      <div className="flex flex-col items-start gap-5 px-4">
        <span className="rounded-lg bg-indigo-200 px-2 py-1 text-xs text-indigo-600">
          Currently Reading
        </span>

        <h2 className="text-xl font-semibold text-gray-800">
          {cuurentReading?.title}
        </h2>

        <p className="px-2 text-sm leading-6 tracking-tight text-gray-500">
          {cuurentReading?.description}
        </p>

        <div className="flex w-[70%] justify-between gap-4">
          <Button>Continue Reading</Button>
          <Button icon={<CiBookmark size={15} />}>Quick note</Button>
        </div>
      </div>
    </div>
  );
}

export default RecentBook;
