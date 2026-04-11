import { useBook } from "../../context/context";
import Card from "../../ui/Card";

function VaultStatus() {
  const { vault } = useBook();
  const all = vault.length;
  const read = vault.filter((book) => book.isReading == true).length;
  const unread = vault.filter((book) => book.isReading == false).length;
  return (
    <div className="grid grid-cols-3 items-center justify-between gap-10">
      <Card icon="My Library" amount={all} bg="bg-neutral-200" />
      <Card icon="Active Reads" amount={read} bg="bg-neutral-200" />
      <Card icon="To Be Read" amount={unread} bg="bg-neutral-200" />
    </div>
  );
}

export default VaultStatus;
