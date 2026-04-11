import Card from "../../ui/Card";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Books } from "../../data/data";
import { useBook } from "../../context/context";

function HomeStatues() {
  const { vault, Goal } = useBook();

  const totalBooks = Books.length;

  const totalReadBooks = vault.filter((book) => book.isReading).length;

  const progress = Goal > 0 ? (totalReadBooks / Goal) * 100 : 0;

  const completedAmount =
    totalReadBooks === 0 ? "No books read yet" : totalReadBooks;

  const goalAmount =
    Goal === 0 ? null : (
      <span className="text-md">
        {totalReadBooks}/{Goal}
        <sub className="text-xs text-gray-600"> Books</sub>
      </span>
    );

  const completedGoal =
    totalReadBooks >= Goal && totalReadBooks !== 0 && Goal !== 0;

  const goalDescription =
    Goal === 0 ? (
      <p className="text-xl font-bold text-gray-700">
        Set your goal to track your progress
      </p>
    ) : (
      <progress
        value={totalReadBooks}
        max={Goal}
        className="h-2 w-full rounded-md"
      />
    );

  return (
    <div className="grid grid-cols-3 items-center gap-10">
      <Card
        icon={<MdOutlineLibraryBooks size={21} />}
        tag="Archive"
        amount={totalBooks}
        description="Total Books"
      />

      <Card
        icon={<IoMdCheckmarkCircleOutline size={21} />}
        tag="Completed"
        amount={completedAmount}
        description="Books Read"
      />

      <Card
        icon={<span className="text-xs text-gray-500">ANNUAL GOAL</span>}
        tag={`${progress}%`}
        amount={goalAmount}
        description={goalDescription}
        bg={completedGoal ? "bg-lime-400" : ""}
      />
    </div>
  );
}

export default HomeStatues;
