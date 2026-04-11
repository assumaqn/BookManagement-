import { FaRegFolderOpen } from "react-icons/fa";

function NoFound({ message }: { message: string }) {
  return (
    <div className="flx-col flex h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <FaRegFolderOpen size={100} className="text-gray-400" />
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  );
}

export default NoFound;
