import { ReactNode, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
const Menu = ({ title, children }: { title: string; children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLLIElement>(null);
    useEffect(()=>{
      const handleOutsideClick = (e:MouseEvent)=> {
        if(menuRef.current && !menuRef.current.contains(e.target as Node)){
          setOpen(false);
        }
      }
      document.addEventListener('click',(e)=>handleOutsideClick(e));
      return () => document.removeEventListener('click',(e)=>handleOutsideClick(e));
    },[])
    const location = useLocation();
    useEffect(()=>{
      setOpen(false);
    },[location])

    return (
      <li
      ref={menuRef}
        className="relative"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <a
          className="transition-all cursor-pointer hover:bg-main-500 hover:text-main-100 border border-main-400 rounded-full pl-6 pr-4 py-2 uppercase flex items-center gap-2"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
        {open && (
          <ul className="uppercase rounded-lg absolute top-full mt-1 left-0 shadow-lg divide-y-2 bg-white divide-main-300/10 min-w-[160px] max-md:fixed max-md:top-40 max-md:left-16 max-md:right-16 z-50">
            {children}
          </ul>
        )}
      </li>
    );
  };
  export default Menu;