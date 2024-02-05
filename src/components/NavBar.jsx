import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between px-[5rem]">
      <Link to={"/"} className="btn btn-ghost text-xl">
        REST Countries
      </Link>
      <Link to={"/"} className="btn btn-ghost">
        Home
      </Link>
    </div>
  );
}

export default NavBar;
