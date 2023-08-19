import React, { ReactNode, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import "@/components/frontend/assets/css/codebox.css";
import { sample } from "./components";
import "@/components/frontend/assets/css/style1.css";

type LanguageOption = keyof typeof sample;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageOption>("jsx");
  const [languageDemo, setLanguageDemo] = useState<string>(sample["jsx"]);
  const [lineNumbers, setLineNumbers] = useState<boolean>(true);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value as LanguageOption;
    setLanguageDemo(sample[selectedLanguage]);
    setLanguage(selectedLanguage);
  };

  const handleLineNumbersToggle = () => {
    setLineNumbers(!lineNumbers);
  };

  return (
    <div className="flex h-screen">
      {/* Left Navbar content */}
      <nav className="fixed top-16 left-0 w-60 h-screen bg-white border border-gray-300"></nav>

      <main className="flex-1 overflow-y-auto">
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-300 border dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[0.9rem]">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
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
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {children}
      </main>

      <nav className="fixed top-16 right-0 w-100 h-screen bg-white border border-gray-300">
        <div className="container p-4">
          <div className="top-bar">
            {/* Language dropdown */}
            <select value={language} onChange={handleLanguageChange}>
              {Object.keys(sample).map((langOption) => (
                <option key={langOption} value={langOption}>
                  {langOption}
                </option>
              ))}
            </select>

            {/* Line numbers toggle */}
            <label>
              Show Line Numbers:
              <input
                type="checkbox"
                checked={lineNumbers}
                onChange={handleLineNumbersToggle}
              />
            </label>
          </div>

          <div className="demo">
            <CopyBlock
              text={languageDemo}
              language={language}
              showLineNumbers={lineNumbers}
              startingLineNumber={1}
              theme={dracula}
              wrapLines={true}
            />
            <br />
            <CopyBlock
              text={`v := Vertex{X: 1, Y: 2}`}
              language="go"
              showLineNumbers={false}
              theme={dracula}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
