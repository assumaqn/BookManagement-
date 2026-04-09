import { NavLink } from "react-router-dom";
import Input from "../../ui/Input";

function VaultNav() {
  const navlinks = [
    {
      name: "All Books",
      path: "/all",
    },
    {
      name: "Read",
      path: "/read",
    },
    {
      name: "Unread",
      path: "/unread",
    },
  ];
  return (
    <div className="flex items-center justify-between gap-3 border-b-[0.75px] border-gray-300 pb-4">
      <ul className="flex items-center justify-between gap-10">
        {navlinks.map((link) => (
          <NavLink
            to={link.path}
            className="rounded-xl bg-gray-300 px-4 py-1 text-center text-sm text-gray-700"
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
      <Input width="25" placeholder="Search any book by title..." />
    </div>
  );
}

export default VaultNav;
