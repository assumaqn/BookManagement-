import { Books } from "../../data/data";
import BaseCard from "../../ui/BaseCard";

function BookDisplay() {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-8 gap-y-8">
        {Books.map((book) => (
          <BaseCard key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}

export default BookDisplay;
