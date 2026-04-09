import { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  icon?: React.ReactNode;
  bgColor?: string;
};
function Button({ children, icon, bgColor }: ButtonType) {
  if (icon) {
    return (
      <button
        className={`flex w-full items-center ${bgColor} justify-center gap-1 rounded-2xl border-[0.75px] border-indigo-300 px-3 py-2 text-xs capitalize text-gray-700 group-hover:bg-indigo-400`}
      >
        {icon}
        {children}
      </button>
    );
  } else
    return (
      // <button className="flex items-center justify-center gap-1 rounded-2xl px-3 py-2 text-xs capitalize text-gray-700">
      <button className="w-full rounded-2xl bg-indigo-600 px-3 py-2 text-xs capitalize text-neutral-50">
        {children}
      </button>
    );
}

export default Button;
