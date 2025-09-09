import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-obsidian font-JetBrain">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/Home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-base self-center font-semibold whitespace-nowrap dark:text-white">
            Seanst._
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-base flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="/Home"
                className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 dark:text-white md:hover:font-extrabold hover:underline"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Project"
                className="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:font-extrabold hover:underline"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:font-extrabold hover:underline"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
