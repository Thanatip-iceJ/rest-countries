import React from "react";
import { useCon } from "../contexts/Context";
import SearchList from "./SearchList";
import { useEffect } from "react";

function SearchBar() {
  const { isSearching, setIsSearching, searchInput, setSearchInput, setFalse } =
    useCon();
  useEffect(() => {
    if (isSearching.length !== 0) {
      setIsSearching(true);
    }
    if (
      searchInput === "" ||
      searchInput.length === 0 ||
      searchInput.trim() === ""
    ) {
      setIsSearching(false);
    }
  }, [searchInput]);
  return (
    <>
      <div className="flex flex-col relative">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-[25vw]"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        {isSearching && <SearchList />}
      </div>
    </>
  );
}

export default SearchBar;
