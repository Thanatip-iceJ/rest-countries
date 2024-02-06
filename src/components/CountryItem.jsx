import React from "react";
import { useNavigate } from "react-router-dom";

function CountryItem({ country }) {
  const navigate = useNavigate();
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-[1.05] transition-all duration-200"
      onClick={() => navigate(`/${country.name.common}`)}
    >
      <figure className="px-10 pt-10">
        <img
          src={country.flags.png}
          alt="flag"
          className="rounded-xl object-cover h-[182.4px]"
        />
      </figure>
      <div className="card-body justify-center">
        <h2 className="card-title">{country.name.common}</h2>
        <div className="flex gap-2">
          <h3 className="font-semibold">Capital: </h3>
          <p>{country.capital}</p>
        </div>
        <div className="flex gap-2">
          <h3 className="font-semibold">Region: </h3>
          <p>{country.region}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryItem;
