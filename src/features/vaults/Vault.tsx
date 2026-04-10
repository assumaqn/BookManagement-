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
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mx-auto flex max-w-screen-xl flex-col gap-20 px-6 py-11"
    >
      {vault.length == 0 ? (
        <NoVault />
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
