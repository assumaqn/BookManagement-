import { Books } from "../../data/data";
import BaseCard from "../../ui/BaseCard";

import { useBook } from "../../context/context";
import { useSearchParams } from "react-router-dom";

type Book = {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  category: string;
  isReading: boolean;
  description: string;
};

let BookToDisplay: Book[] = Books;
function BookDisplay() {
  const { vault, AddToVault } = useBook();
  const [searchParams] = useSearchParams();
  const query: string = searchParams.get("category") ?? "";

  if (query == "All") {
    BookToDisplay = Books;
  }
  if (query == "Fantasy") {
    BookToDisplay = Books.filter((book) => book.category == query);
  }
  if (query == "Sci-Fi") {
    BookToDisplay = Books.filter((book) => book.category == query);
  }
  if (query == "Romance") {
    BookToDisplay = Books.filter((book) => book.category == query);
  }
  if (query == "Literary Fiction") {
    BookToDisplay = Books.filter((book) => book.category == query);
    console.log(BookToDisplay);
  }

  function handleAdd(book: Book) {
    AddToVault(book);
  }

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-8">
      {BookToDisplay.map((book) => {
        const isVault = vault.some((b) => b.id === book.id);
        return (
          <BaseCard
            key={book.id}
            {...book}
            onAdd={() => handleAdd(book)}
            isVault={isVault}
          />
        );
      })}
    </div>
  );
}

export default BookDisplay;
