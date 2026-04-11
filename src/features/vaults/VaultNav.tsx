import { useSearchParams } from "react-router-dom";
import Input from "../../ui/Input";
import { useBook } from "../../context/context";
import { useState } from "react";

function VaultNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { handleSearchQuery } = useBook();

  const activeCategory = searchParams.get("category");

  const categories = [
    { name: "All Books", path: "all" },
    { name: "Read", path: "read" },
    { name: "Unread", path: "unread" },
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
    <div className="flex items-center justify-between gap-3 border-b-[0.75px] border-gray-300 pb-4">
      <ul className="flex items-center gap-10">
        {categories.map((category) => {
          const isActive =
            category.path === "all"
              ? !activeCategory
              : activeCategory === category.path;

          return (
            <li
              key={category.name}
              onClick={() => handleCategory(category.path)}
              className={`cursor-pointer list-none rounded-lg px-3 py-1 text-xs transition-colors ${
                isActive ? "bg-indigo-500 text-white" : "bg-gray-300"
              }`}
            >
              {category.name}
            </li>
          );
        })}
      </ul>

      <Input
        width="25"
        placeholder="Search any book by title..."
        onChange={handleSearch}
        value={searchQuery}
      />
    </div>
  );
}

export default VaultNav;
