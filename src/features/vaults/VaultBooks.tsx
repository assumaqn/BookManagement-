// import { Books } from "../../data/data";
import { vaultData } from "../../data/VaultData";
import BaseCard from "../../ui/BaseCard";

// import VaultCard from "../../ui/VaultCard";

function VaultBooks() {
  return (
    <div className="grid grid-cols-5 gap-5">
      {vaultData.map((book) => (
        <BaseCard {...book} variant="vault" />
      ))}
    </div>
  );
}

export default VaultBooks;
