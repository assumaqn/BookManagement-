import { motion } from "framer-motion";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import Button from "./Button";

import { MouseEventHandler } from "react";

type BookCardProps = {
  title: string;
  author: string;
  coverImage: string;
  onAdd?: MouseEventHandler<HTMLButtonElement>;
  variant?: "default" | "vault";
  isVault?: boolean;
};

function BaseCard({
  title,
  author,
  coverImage: image,
  onAdd,
  isVault,
  variant = "default",
}: BookCardProps) {
  return (
    <motion.div className="group relative w-full cursor-pointer rounded-2xl bg-neutral-50 p-3 shadow-md transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className={`h-[250px] w-[250px] object-cover transition-transform duration-300 ease-out group-hover:scale-105 ${
            isVault ? "opacity-1 blur-sm" : ""
          }`}
        />
      </div>

      {/* Info */}
      <div className="mt-2 w-full border-b-[0.25px] border-gray-300 py-1">
        <h4 className="text-sm font-semibold capitalize">{title}</h4>
        <p className="text-xs text-gray-500">{author}</p>
      </div>

      {/* Vault badge */}
      {variant === "vault" && (
        <span className="absolute right-6 top-4 rounded-lg bg-blue-500 px-5 py-1 text-xs font-semibold text-gray-200">
          Unread
        </span>
      )}

      {/* Actions */}
      <div className="mt-3 flex items-center justify-between gap-2">
        {variant === "vault" ? (
          <>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <label className="text-sm text-gray-500">Mark as read</label>
            </div>

            <button>
              <FaRegTrashCan color="red" />
            </button>
          </>
        ) : isVault ? (
          <Button
            icon={<CiCircleCheck size={16} />}
            bgColor="bg-indigo-300"
            onClick={onAdd}
            isVault={isVault}
          >
            Added
          </Button>
        ) : (
          <Button
            icon={<FaPlus />}
            bgColor="bg-indigo-300"
            onClick={onAdd}
            isVault={isVault}
          >
            Add to Vault
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export default BaseCard;
