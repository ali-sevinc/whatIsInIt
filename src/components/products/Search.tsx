import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  function handleSearch() {
    if (searchValue.length < 3) return;
    navigate(`/search/${searchValue}`);
    setSearchValue("");
  }

  return (
    <p>
      <input
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="px-2 py-1 text-lg rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-700 z-10 relative"
      />
      <button
        onClick={handleSearch}
        className="bg-white border-l px-2 py-1 text-lg rounded-r-lg hover:bg-amber-50"
      >
        🔍
      </button>
    </p>
  );
}
