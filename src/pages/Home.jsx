import React from "react";
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";
import { useCon } from "../contexts/Context";
import { useEffect } from "react";
import DropDown from "../components/DropDown";
import { useSearchParams, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useState } from "react";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [postsPerPage, setPostsPerPage] = useState(15);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramsValue = queryParams.get("region");
  const pageValue = queryParams.get("page");

  const { getAll, getByRegion, setSearchInput } = useCon();
  useEffect(() => {
    setSearchInput("");
    if (!pageValue) {
      setSearchParams({ page: 1 });
    }
    if (paramsValue) {
      getByRegion(paramsValue);
    } else {
      getAll();
    }
  }, [paramsValue, pageValue]);

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
