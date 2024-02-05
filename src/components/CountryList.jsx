import React from "react";
import { useCon } from "../contexts/Context";
import Loading from "./Loading";
import CountryItem from "./CountryItem";

function CountryList() {
  const { allCountries } = useCon();
  return (
    <>
      {allCountries ? (
        <div className="grid grid-cols-3 gap-[3rem]">
          {allCountries.data.map((item, i) => (
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
