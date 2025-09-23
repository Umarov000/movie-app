import { memo } from "react";
import logo from "@/shared/assets/movie-logo.svg";
import home from "@/shared/assets/home.svg";
import movie from "@/shared/assets/movies.svg";
import bookmark from "@/shared/assets/bookmark.svg";
import search from "@/shared/assets/search.svg";
import { NavLink } from "react-router-dom";

export const Header = memo(() => {
  return (
    <header className="h-[80px] bg-[#00000080]">
      <div className="container flex justify-between items-center py-4">
        <div className="text-xl">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <nav>
          <ul className="flex">
            <li className="flex flex-col items-center text-center w-[80px] hover:cursor-pointer ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 flex flex-col items-center text-center "
                    : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                }
              >
                <img src={home} alt="" />
                Афиша
              </NavLink>
            </li>
            <li className="flex flex-col items-center text-center w-[80px] hover:cursor-pointer ">
              <NavLink
                to="/movie"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 flex flex-col items-center text-center"
                    : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                }
              >
                <img src={movie} alt="" />
                Сеансы
              </NavLink>
            </li>
            <li className="flex flex-col items-center text-center w-[80px] hover:cursor-pointer ">
              <NavLink
                to="/bookmark"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 flex flex-col items-center text-center"
                    : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                }
              >
                <img src={bookmark} alt="" />
                Билеты
              </NavLink>
            </li>
            <li className="flex flex-col items-center text-center w-[80px] hover:cursor-pointer ">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 flex flex-col items-center text-center"
                    : "text-[#A1A1A1] flex flex-col items-center text-center hover:text-[#C61F1F]"
                }
              >
                <img src={search} alt="" />
                Поиск
              </NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <div className="flex gap-5 items-center">
            <select
              defaultValue="Rus"
              className="text-white   rounded-md px-2 py-1  "
            >
              <option value="Rus">Rus</option>
              <option value="Eng">Eng</option>
              <option value="Uzb">Uzb</option>
            </select>

            <button className="text-white text-[16px] leading-[20px] tracking-[1%] py-[18px] px-[66px] bg-[#C61F1F] rounded-xl hover:bg-[#a81818] transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});
