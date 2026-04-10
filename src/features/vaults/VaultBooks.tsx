import { AnimatePresence } from "motion/react";
import { useBook } from "../../context/context";
import BaseCard from "../../ui/BaseCard";
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

function VaultBooks() {
  const { vault: vaultData } = useBook();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("category") ?? "";

  let BookToDisplay: Book[] = vaultData;

  if (!query || query === "all") {
    BookToDisplay = vaultData;
  } else if (query === "read") {
    BookToDisplay = vaultData.filter((book) => book.isReading === true);
  } else if (query === "unread") {
    BookToDisplay = vaultData.filter((book) => book.isReading === false);
  }
  return (
    <div className="grid grid-cols-5 gap-5">
      <AnimatePresence>
        {BookToDisplay.map((book) => (
          <BaseCard key={book.id} {...book} variant="vault" />
        ))}
      </AnimatePresence>
    </div>
  );
}
export default VaultBooks;
