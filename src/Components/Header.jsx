// Header.jsx
// Navigation bar with links

import { NavLink } from "react-router";

export default function Header() {
  return (

    <div className="flex justify-between px-10 items-center bg-gray-100">

      {/* Logo */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrh75oo9dywkkAcCLHhkwCxdqmzBK3T5S60Q&s"
        width="80"
      />

      {/* Navigation links */}
      <ul className="flex gap-10">

        <li>
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : ""
          }>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="products" className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : ""
          }>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="contact" className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : ""
          }>
            Contact
          </NavLink>
        </li>

      </ul>

    </div>
  );
}