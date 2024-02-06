import React from "react";
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";
import { useCon } from "../contexts/Context";
import { useEffect } from "react";
import DropDown from "../components/DropDown";
import { useSearchParams, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramsValue = queryParams.get("region");
  console.log(paramsValue);

  const { getAll, getByRegion, setSearchInput } = useCon();
  useEffect(() => {
    if (!paramsValue) {
      getAll();
      setSearchParams({ page: 1 });
    } else {
      getByRegion(paramsValue);
    }
    setSearchInput("");
  }, [paramsValue]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <SearchBar />
        <DropDown />
      </div>
      <div className="mt-[3rem] flex flex-col items-center gap-[5rem]">
        <CountryList />
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
