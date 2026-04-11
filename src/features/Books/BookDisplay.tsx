import { Books } from "../../data/data";
import BaseCard from "../../ui/BaseCard";

import { useBook } from "../../context/context";
import { useSearchParams } from "react-router-dom";
import NoFound from "./NoFound";

type Book = {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  category: string;
  isReading: boolean;
  description: string;
};

function BookDisplay() {
  const { vault, AddToVault, searchQuery } = useBook();
  const [searchParams] = useSearchParams();
  const query: string = searchParams.get("category") ?? "";

  let BookToDisplay = Books;
  if (query && query !== "All") {
    BookToDisplay = BookToDisplay.filter((book) => book.category === query);
  }

  // 2. Search filter
  if (searchQuery) {
    BookToDisplay = BookToDisplay.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }
  if (BookToDisplay.length == 0) {
    return <NoFound message="No Book found" />;
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
