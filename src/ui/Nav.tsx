import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Icons from "./Icons";

function Nav() {
  return (
    <div className="flex items-center justify-between border-b-[0.5px] border-slate-300 bg-neutral-50 p-4 text-sm text-gray-500">
      <Logo />

      <motion.ul className="flex items-center gap-5">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/books">Books</NavLink>

        <NavLink to="/vault">My vault</NavLink>
      </motion.ul>
      <Icons />
    </div>
  );
}

export default Nav;
