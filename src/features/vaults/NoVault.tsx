import { FaRegFolderOpen } from "react-icons/fa6";
import { motion } from "framer-motion";

import ButtonLink from "../../ui/ButtonLink";

function NoVault() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flx-col flex h-[70vh] items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <FaRegFolderOpen size={100} className="text-gray-400" />
        <p className="text-sm text-gray-500">No books in your vault yet</p>
        <ButtonLink to="books">Start adding</ButtonLink>
      </div>
    </motion.div>
  );
}

export default NoVault;
