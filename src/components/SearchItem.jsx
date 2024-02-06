import React from "react";
import { useNavigate } from "react-router-dom";

function SearchItem({ flag, name }) {
  const navigate = useNavigate();
  return (
    <div
      className="px-5 py-2 flex items-center gap-5 hover:bg-base-200 rounded-md transition-all duration-150 cursor-pointer"
      onClick={() => navigate(`/${name}`)}
    >
      <img src={flag} alt="" className="max-h-[16px] max-w-[20px]" />
      <p>{name}</p>
    </div>
  );
}

export default SearchItem;
