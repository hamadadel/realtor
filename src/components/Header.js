import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  const isPathMatchHref = (route) =>
    path === route ? "text-black border-b-red-500" : "";
  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
      <header className="flex justify-between items-center px-3  max-w-5xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="company logo"
            className="h-5 cursor-pointer"
          />
        </div>
        <nav>
          <ul className="flex space-x-9">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent ${isPathMatchHref(
                "/"
              )}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent ${isPathMatchHref(
                "/offers"
              )}`}
              onClick={() => navigate("offers")}
            >
              Offers
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent ${isPathMatchHref(
                "/sign-in"
              )}`}
              onClick={() => navigate("sign-in")}
            >
              sign-in
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
