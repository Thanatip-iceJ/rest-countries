import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

const Context = createContext();

function ContextProvider({ children }) {
  const [allCountries, setAllCountries] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [currentCountry, setCurrentCountry] = useState(null);
  const [detailsPageLoading, setDetailsPageLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  console.log(allCountries);
  console.log("CURRENT=> ", currentCountry);
  const getAll = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setAllCountries(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getByRegion = async (region) => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setAllCountries(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getByName = async (name) => {
    try {
      setDetailsPageLoading(true);
      const res = await axios.get(`https://restcountries.com/v3.1/name/${name}
        `);
      setCurrentCountry(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setDetailsPageLoading(false);
    }
  };
  const setFalse = () => setIsSearching(false);

  const sharedObj = {
    allCountries,
    setAllCountries,
    getAll,
    searchInput,
    setSearchInput,
    getByRegion,
    currentCountry,
    setCurrentCountry,
    getByName,
    detailsPageLoading,
    setDetailsPageLoading,
    isSearching,
    setIsSearching,
    setFalse,
  };

  return <Context.Provider value={sharedObj}>{children}</Context.Provider>;
}

export default ContextProvider;

export const useCon = () => useContext(Context);
