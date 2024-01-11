import { Link } from "react-router-dom";
import Search from "../products/Search";

export default function Header() {
  return (
    <header className="flex flex-col gap-2 sm:flex-row px-12 sm:h-16 items-center justify-between bg-amber-200 text-amber-700">
      <Link to="/">
        <h1 className="text-3xl font-semibold">WhatIsInIt</h1>
      </Link>
      <Search />
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
