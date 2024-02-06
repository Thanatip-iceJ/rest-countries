import React from "react";
import SearchItem from "./SearchItem";
import { useCon } from "../contexts/Context";

function SearchList() {
  const { searchInput, allCountries } = useCon();
  const searchArr = allCountries.data
    .filter((el) => el.name.common.toLowerCase().includes(searchInput))
    .slice(0, 8);
  return (
    <ul className="flex flex-col border-2 rounded-lg absolute z-10 top-[3rem] bg-base-100 w-full">
      {searchArr.map((el) => (
        <SearchItem
          key={el.name.common}
          name={el.name.common}
          flag={el.flags.png}
        />
      ))}
    </ul>
  );
}

export default SearchList;
