import { useBook } from "../../context/context";
import { motion } from "framer-motion";

import NoVault from "./NoVault";
import VaultBooks from "./VaultBooks";
import VaultFooter from "./VaultFooter";
import VaultHeader from "./VaultHeader";
import VaultNav from "./VaultNav";
import VaultStatus from "./VaultStatus";

function Vault() {
  const { vault } = useBook();
  return (
    <motion.div
      layout
      className="mx-auto flex max-w-screen-xl flex-col gap-20 px-6 py-11"
    >
      {vault.length == 0 ? (
        <NoVault message="No books in your vault yet" />
      ) : (
        <>
          <VaultHeader />
          <VaultStatus />
          <VaultNav />
          <VaultBooks />
          <VaultFooter />
        </>
      )}
    </motion.div>
  );
}

export default Vault;
