import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-slate-200">
      <div className="flex justify-around items-center p-3 mx-auto">
        <Link to='/'>
          <h1 className="font-bold text-sm sm:text-4xl flex">
            <span className="text-blue-700 ">Estate</span>
            <span className="text-slate-700">Guardian</span>
          </h1>
        </Link>
        <form className="bg-slate-300 p-3 rounded-md flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-inherit outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-16">
          <li className="hidden sm:block text-slate-900 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:block text-slate-900 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hidden sm:block text-slate-900 hover:underline">
            <Link to="/sign-in">signIn</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}


export default Header;