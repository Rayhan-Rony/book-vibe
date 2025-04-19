import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between work p-6">
      <div className="nav-item">
        <h2 className="font-semibold text-3xl">Book Vibe</h2>
      </div>
      <div className="nav-item">
        <ul className="flex justify-center items-center gap-4">
          <li className="font-bold border border-[#43ff64d9] px-4 py-3 rounded-lg text-[#43ff64d9]">
            <a href="#">Home</a>
          </li>
          <li className="px-4 py-3 rounded-lg text-[#131313cc]">
            <a href="#">Listed Books</a>
          </li>
          <li className="px-4 py-3 rounded-lg text-[#131313cc]">
            <a href="#">Pages to Read</a>
          </li>
        </ul>
      </div>
      <div className="nav-item flex justify-center items-center gap-4">
        <button className="py-4 px-5 text-white bg-[#43ff64d9] font-semibold rounded-lg cursor-pointer">
          Sign In
        </button>
        <button className="bg-[#59c6d2] py-4 px-5 text-white  font-semibold rounded-lg cursor-pointer">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
