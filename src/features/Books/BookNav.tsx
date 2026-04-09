import { NavLink } from "react-router-dom";
import Input from "../../ui/Input";

function BookNav() {
  const categories = [
    { name: "All", path: "/" },
    { name: "Fantasy", path: "/Fantasy" },
    { name: "Sci-Fi", path: "/Sci-Fi" },
    { name: "Romance", path: "/Romance" },
    { name: "Literary Fiction", path: "/Fiction" },
  ];
  return (
    <div className="flex items-center justify-between gap-10 border-b-[0.75px] border-gray-300 pb-4">
      <Input width="25" placeholder="Search any book by title..." />
      <nav className="flex items-center gap-10 text-sm text-gray-700">
        {categories.map((category) => (
          <NavLink
            key={category.path}
            to={category.path}
            className={({ isActive }) =>
              `rounded-xl px-3 py-1 text-xs ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default BookNav;
