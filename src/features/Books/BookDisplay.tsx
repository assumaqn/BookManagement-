import { useState } from "react";
import { Books } from "../../data/data";
import BaseCard from "../../ui/BaseCard";
import toast from "react-hot-toast";
import { vaultData } from "../../data/VaultData";

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
  const [vault, setVault] = useState<number[]>([]);

  // function handleAdd(book: Book) {
  //   setVault((prev) => [...prev, book.id]);
  //   toast.success(`"${book.title}" is  added to your vault!!`);
  //   vaultData.push(book);
  // }
  function handleAdd(book: Book) {
    setVault((prev) => {
      toast.success(`"${book.title}" added to your vault!`);
      return [...prev, book.id];
    });
    console.log(vault);
  }

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-8">
      {Books.map((book) => (
        <BaseCard
          key={book.id}
          {...book}
          isVault={vault.includes(book.id)}
          onAdd={() => handleAdd(book)}
        />
      ))}
    </div>
  );
}

export default BookDisplay;
