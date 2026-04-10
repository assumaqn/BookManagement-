import { useSearchParams } from "react-router-dom";
import Input from "../../ui/Input";

function BookNav() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("category");

  const categories = [
    { name: "All" },
    { name: "Fantasy" },
    { name: "Sci-Fi" },
    { name: "Romance" },
    { name: "Literary Fiction" },
  ];

  const handleCategory = (name: string) => {
    searchParams.set("category", name);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-between gap-10 border-b-[0.75px] border-gray-300 pb-4">
      <Input width="25" placeholder="Search any book by title..." />

      <nav className="flex items-center gap-10 text-sm">
        {categories.map((category) => {
          const isActive = activeCategory === category.name;

          return (
            <li
              key={category.name}
              onClick={() => handleCategory(category.name)}
              className={`cursor-pointer list-none rounded-lg bg-gray-300 px-3 py-1 text-xs transition-colors ${
                isActive ? "bg-indigo-500 px-3 py-1 text-white" : ""
              }`}
            >
              {category.name}
            </li>
          );
        })}
      </nav>
    </div>
  );
}

export default BookNav;
