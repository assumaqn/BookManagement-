import { FaRegFolderOpen } from "react-icons/fa6";

import ButtonLink from "../../ui/ButtonLink";

function NoVault({ message }: { message?: string }) {
  return (
    <div className="flx-col flex h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <FaRegFolderOpen size={100} className="text-gray-400" />
        <p className="text-sm text-gray-500">{message}</p>
        <ButtonLink to="books">Start adding</ButtonLink>
      </div>
    </div>
  );
}

export default NoVault;
