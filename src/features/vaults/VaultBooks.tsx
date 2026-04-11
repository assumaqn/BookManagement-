import { AnimatePresence } from "motion/react";
import { useBook } from "../../context/context";
import BaseCard from "../../ui/BaseCard";
import { useSearchParams } from "react-router-dom";
import NoVault from "./NoVault";

function VaultBooks() {
  const { vault: vaultData, searchQuery } = useBook();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("category") ?? "";

  let BookToDisplay = vaultData;
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
    return <NoVault message="No Book found" />;
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
