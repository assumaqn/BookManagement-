import Card from "../../ui/Card";

function VaultStatus() {
  return (
    <div className="grid grid-cols-3 items-center justify-between gap-10">
      <Card icon="Total Collecton" amount={5} bg="bg-neutral-200" />
      <Card icon="Currently Reading" amount={3} bg="bg-neutral-200" />
      <Card icon="Completed the year" amount={18} bg="bg-neutral-200" />
    </div>
  );
}

export default VaultStatus;
