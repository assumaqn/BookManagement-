import Button from "./Button";
import { FaPlus } from "react-icons/fa6";
type BookCardProps = {
  title: string;
  author: string;
  image: string;
};

function BookCard({ title, author, image }: BookCardProps) {
  return (
    <div className="w-fit rounded-2xl bg-neutral-50 p-3 shadow-sm">
      <div>
        <img
          src={image}
          alt={title}
          className="h-[250px] w-[150px] rounded-xl object-cover"
        />
      </div>

      <div className="mt-2">
        <h4 className="text-sm font-semibold capitalize">{title}</h4>
        <p className="text-xs text-gray-500">{author}</p>
      </div>

      <div className="mt-3">
        <Button icon={<FaPlus />}>Add to Vault</Button>
      </div>
    </div>
  );
}

export default BookCard;
