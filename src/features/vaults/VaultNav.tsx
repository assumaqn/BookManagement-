import { NavLink } from "react-router-dom";

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
    <div className="flex items-center justify-between gap-3">
      <ul className="flex items-center justify-between gap-10">
        {navlinks.map((link) => (
          <NavLink
            to={link.path}
            className="rounded-lg bg-gray-300 px-2 py-1 text-sm"
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
      <input
        type="search"
        className="w-[25%] rounded-lg bg-gray-300 px-2 py-2 placeholder:px-2 placeholder:text-xs"
        placeholder="Search any book by title..."
      />
    </div>
  );
}

export default VaultNav;
