import Card from "../../ui/Card";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Books } from "../../data/data";
import { useBook } from "../../context/context";
function HomeStatues() {
  const { vault } = useBook();
  const totalBook = Books.length;
  const totalReadBook = vault.filter((book) => book.isReading == true).length;
  return (
    <div className="gap grid grid-cols-3 items-center justify-between gap-10">
      <Card
        icon={<MdOutlineLibraryBooks size={21} />}
        tag="Archive"
        amount={totalBook}
        description="Total Books"
      />
      <Card
        icon={<IoMdCheckmarkCircleOutline size={21} />}
        tag="Completed"
        amount={totalReadBook == 0 ? "No books read yet" : totalReadBook}
        description="Books Read"
      />
      <Card
        icon={<span className="text-xs text-gray-500">ANNUAL GOAL</span>}
        tag="84%"
        amount={
          <span className="text-md">
            21/25 <sub className="text-xs text-gray-600">Titles</sub>
          </span>
        }
        description={
          <progress value={90} max={100} className="h-2 w-full rounded-md" />
        }
      />
    </div>
  );
}

export default HomeStatues;
