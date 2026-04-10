import { AnimatePresence } from "motion/react";
import { useBook } from "../../context/context";
import BaseCard from "../../ui/BaseCard";

function VaultBooks() {
  const { vault: vaultData } = useBook();

  return (
    <div className="grid grid-cols-5 gap-5">
      <AnimatePresence>
        {vaultData.map((book) => (
          <BaseCard key={book.id} {...book} variant="vault" />
        ))}
      </AnimatePresence>
    </div>
  );
}
export default VaultBooks;
