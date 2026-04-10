import { useBook } from "../../context/context";
import BaseCard from "../../ui/BaseCard";

function VaultBooks() {
  const { vault: vaultData } = useBook();

  return (
    <div className="grid grid-cols-5 gap-5">
      {vaultData.map((book) => {
        return <BaseCard key={book.id} {...book} variant="vault" />;
      })}
    </div>
  );
}
export default VaultBooks;
