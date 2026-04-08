import ButtonLink from "../../ui/ButtonLink";

function VaultFooter() {
  return (
    <div className="my-4 flex flex-col items-center justify-center gap-4 rounded-3xl bg-indigo-200 px-4 py-6">
      <h2 className="text-2xl font-bold capitalize text-indigo-500">
        expand your horizon?
      </h2>
      <p className="w-[30%] text-center text-xs leading-5 text-indigo-500">
        Welcome back to your private sanctuary. Your curated collection of
        thoughts,chapters and discoveries awaits.
      </p>
      <ButtonLink to="books">Explore Recommendations</ButtonLink>
    </div>
  );
}

export default VaultFooter;
