import React from "react";
import { useCon } from "../contexts/Context";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./pagination.css";

function Pagination() {
  const { postsPerPage, allCountries } = useCon();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const region = queryParams.get("region");
  const pageValue = queryParams.get("page");
  const lastIndex = pageValue * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  console.log(searchParams);

  let pages = [];
  if (allCountries?.data) {
    for (
      let i = 1;
      i <= Math.ceil(allCountries.data.length / postsPerPage);
      i++
    ) {
      pages.push(i);
    }
  }

  return (
    <>
      <div className="pagination">
        {pages.map((el) => (
          <button
            key={el}
            value={el}
            onClick={(e) => {
              searchParams.set("page", el);
              setSearchParams(searchParams);
              setActive(e);
            }}
            className={`page-btn ${el == pageValue && "active"}`}
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
