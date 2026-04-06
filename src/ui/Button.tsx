import { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  icon?: React.ReactNode;
};
function Button({ children, icon }: ButtonType) {
  if (icon) {
    return (
      <button className="flex items-center justify-center gap-1 rounded-2xl px-3 py-2 text-xs capitalize text-gray-700">
        {icon}
        {children}
      </button>
    );
  } else
    return (
      // <button className="flex items-center justify-center gap-1 rounded-2xl px-3 py-2 text-xs capitalize text-gray-700">
      <button className="rounded-2xl bg-indigo-600 px-3 py-2 text-xs capitalize text-neutral-50">
        {children}
      </button>
    );
}

export default Button;
