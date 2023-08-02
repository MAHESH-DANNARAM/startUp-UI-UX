import { HiChevronRight } from "react-icons/hi2";

import { ReactNode, useState } from 'react'
const SubMenu = ({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) => {
    const [open, setOpen] = useState(false);
    return (
      <li
        className="relative group"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <a
          className="transition-all group-first:rounded-t-lg group-last:rounded-b-lg flex justify-between items-center cursor-pointer hover:bg-main-500 hover:text-main-100 p-4 block text-main"
        >
          {title}
          <HiChevronRight size="16" />
        </a>
        {open && (
          <ul className="uppercase border rounded-lg border-main-300/20 absolute top-0 mt-1 left-full shadow-lg divide-y-2 bg-white divide-main-300/10 min-w-[160px] max-md:fixed max-md:top-0 max-md:left-16 max-md:right-16 z-50 text-main">
            {children}
          </ul>
        )}
      </li>
    );
  };
  export default SubMenu;