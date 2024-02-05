import React from "react";
import { useCon } from "../contexts/Context";
import region from "../contexts/static";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function DropDown() {
  const { setCurrentRegion } = useCon();
  const [searchParams, setSearchParams] = useSearchParams("");

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Region
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <div onClick={() => setSearchParams({ page: 1 })}>All</div>
        </li>
        <li>
          <div onClick={() => setSearchParams({ page: 1, region: "europe" })}>
            Europe
          </div>
        </li>
        <li>
          <div onClick={() => setSearchParams({ page: 1, region: "asia" })}>
            Asia
          </div>
        </li>
        <li>
          <div onClick={() => setSearchParams({ page: 1, region: "americas" })}>
            Americas
          </div>
        </li>
        <li>
          <div onClick={() => setSearchParams({ page: 1, region: "africa" })}>
            Africa
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
