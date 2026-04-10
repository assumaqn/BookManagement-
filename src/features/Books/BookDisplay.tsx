import { Books } from "../../data/data";
import BaseCard from "../../ui/BaseCard";

import { useBook } from "../../context/context";

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
  const { vault, AddToVault } = useBook();

  function handleAdd(book: Book) {
    AddToVault(book);
  }

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-8">
      {Books.map((book) => {
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
