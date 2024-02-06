import React from "react";
import { useCon } from "../contexts/Context";
import Loading from "./Loading";
import CountryItem from "./CountryItem";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function CountryList() {
  const { allCountries, postsPerPage } = useCon();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramsValue = queryParams.get("region");
  const pageValue = queryParams.get("page");

  const lastIndex = pageValue * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;

  return (
    <>
      {allCountries ? (
        <div className="grid grid-cols-3 gap-[3rem]">
          {allCountries.data.slice(firstIndex, lastIndex).map((item, i) => (
            <CountryItem key={i} country={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-6">
          <Loading />
        </div>
      )}
    </>
  );
}

export default CountryList;
