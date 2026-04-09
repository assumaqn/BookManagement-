import { FaArrowRight } from "react-icons/fa";
import BookListCard from "../../ui/BookListCard";
import { Books } from "../../data/data";

function Wishlist() {
  const length = Books.length;

  const start = Math.floor(Math.random() * (length - 1));

  const end = Math.floor(Math.random() * (length - start - 1)) + start + 1;

  const wishList = Books.slice(start, end);
  return (
    <div className="flex w-[50%] flex-col items-start justify-between gap-5 rounded-3xl bg-gray-50 px-5 py-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-lg font-bold text-gray-800">Wishlist</span>
        <FaArrowRight className="cursor-pointer text-gray-400 hover:text-gray-600" />
      </div>
      {wishList.map((list) => (
        <BookListCard
          imgUrl={list.coverImage}
          title={list.title}
          author={list.author}
        />
      ))}
    </div>
  );
}
export default Wishlist;
