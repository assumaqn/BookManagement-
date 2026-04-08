import { ReactNode } from "react";
import { Link } from "react-router-dom";

type linkTypo = {
  children: ReactNode;
  to: string;
};

function ButtonLink({ children, to }: linkTypo) {
  return (
    <Link
      to={`/${to}`}
      className="block rounded-2xl bg-indigo-600 px-3 py-2 text-xs capitalize text-neutral-50"
    >
      {children}
    </Link>
  );
}
export default ButtonLink;
