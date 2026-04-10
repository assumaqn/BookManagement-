import { ReactNode, MouseEventHandler } from "react";

type ButtonType = {
  children: ReactNode;
  icon?: React.ReactNode;
  bgColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isVault?: boolean;
};
function Button({ children, icon, bgColor, onClick, isVault }: ButtonType) {
  if (icon) {
    return (
      <button
        className={`flex w-full items-center disabled:cursor-not-allowed ${bgColor} justify-center gap-1 rounded-2xl border-[0.75px] border-indigo-300 px-2 py-2 text-xs capitalize text-gray-700 group-hover:bg-indigo-400`}
        onClick={onClick}
        disabled={isVault}
      >
        {icon}
        {children}
      </button>
    );
  } else
    return (
      // <button className="flex items-center justify-center gap-1 rounded-2xl px-3 py-2 text-xs capitalize text-gray-700">
      <button className="w-full rounded-2xl bg-indigo-600 px-3 py-2 text-xs capitalize text-neutral-50 disabled:cursor-not-allowed">
        {children}
      </button>
    );
}

export default Button;
