import Card from "../../ui/Card";
import { MdOutlineLibraryBooks } from "react-icons/md";
function HomeStatues() {
  return (
    <div className="gap grid grid-cols-3 items-center justify-between gap-10">
      <Card
        icon={<MdOutlineLibraryBooks size={21} />}
        tag="Archive"
        amount={128}
        description="Total Books"
      />
      <Card
        icon={<MdOutlineLibraryBooks size={21} />}
        tag="Completed"
        amount={42}
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
