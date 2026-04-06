import { FaArrowRight } from "react-icons/fa";
import BookListCard from "../../ui/BookListCard";

function Wishlist() {
  return (
    <div className="flex w-[50%] flex-col items-start justify-between gap-5 rounded-3xl bg-gray-50 px-5 py-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-lg font-bold text-gray-800">Wishlist</span>
        <FaArrowRight className="cursor-pointer text-gray-400 hover:text-gray-600" />
      </div>
      <BookListCard imgUrl="./random-1.png" />
      <BookListCard imgUrl="./random-2.png" />
      <BookListCard imgUrl="./random-3.png" />
      <BookListCard imgUrl="./random-4.png" />
      <BookListCard imgUrl="./random-5.png" />
    </div>
  );
}
export default Wishlist;
