import { useSearchParams } from "react-router-dom";
import Input from "../../ui/Input";
import { useState } from "react";
import { useBook } from "../../context/context";

function BookNav() {
  const { handleSearchQuery } = useBook();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeCategory = searchParams.get("category") || "All";

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

  function handleSearch(query: string) {
    setSearchQuery(query);
    handleSearchQuery(query);
  }
  return (
    <div className="flex items-center justify-between gap-10 border-b-[0.75px] border-gray-300 pb-4">
      <Input
        width="25"
        value={searchQuery}
        placeholder="Search any book by title..."
        onChange={handleSearch}
      />

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
