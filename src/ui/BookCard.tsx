import Button from "./Button";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
type BookCardProps = {
  title: string;
  author: string;
  image: string;
};

function BookCard({ title, author, image }: BookCardProps) {
  return (
    <motion.div className="group w-full cursor-pointer rounded-2xl bg-neutral-50 p-3 shadow-md transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-[250px] w-[250px] object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      <div className="mt-2">
        <h4 className="text-sm font-semibold capitalize">{title}</h4>
        <p className="text-xs text-gray-500">{author}</p>
      </div>

      <div className="mt-3">
        <Button icon={<FaPlus />}>Add to Vault</Button>
      </div>
    </motion.div>
  );
}

export default BookCard;
