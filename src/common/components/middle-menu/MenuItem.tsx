import { Link } from "react-router-dom";

const MenuItem = ({ title, link}: { title: string; link: string }) => {
  return (
    <li className="relative group">
      {link ? (
        <Link
          to={link}
          className="transition-all group-first:rounded-t-lg group-last:rounded-b-lg cursor-pointer text-main hover:bg-main-500 hover:text-main-100 p-4 block"
        >
          {title}
        </Link>
      ) : (
        <a className="transition-all group-first:rounded-t-lg group-last:rounded-b-lg cursor-pointer text-main hover:bg-main-500 hover:text-main-100 p-4 block">
          {title}
        </a>
      )}
    </li>
  );
};
export default MenuItem;
