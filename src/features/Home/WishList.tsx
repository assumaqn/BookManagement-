import { FaArrowRight } from "react-icons/fa";
import BookListCard from "../../ui/BookListCard";
import { Books } from "../../data/data";

function Wishlist() {
  const wishList = [...Books].sort(() => Math.random() - 0.5).slice(0, 5);

  return (
    <div className="flex w-[50%] flex-col items-start justify-between gap-5 rounded-3xl bg-gray-50 px-5 py-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-lg font-bold text-gray-800">
          Recommended for You
        </span>
        <FaArrowRight className="cursor-pointer text-gray-400 hover:text-gray-600" />
      </div>

      {wishList.map((list) => (
        <BookListCard
          key={list.id}
          imgUrl={list.coverImage}
          title={list.title}
          author={list.author}
        />
      ))}
    </div>
  );
}

export default Wishlist;
