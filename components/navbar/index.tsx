import React from "react";
import Logo from "./Logo";
import Links from "./links";
import Search from "./search";
import Cart from "./cart";
import Menu from "./menu";

export default function Navbar() {
  return (
    <nav className="fixed z-[10] top-0 inset-x-0 px-4 py-3 border-b border-primary/10 bg-white">
      <div className="flex items-center justify-between py-2">
        <Logo />
        <ul className="hidden md:flex items-center gap-4 text-[14.5px] text-neutral-700">
            <Links />
        </ul>

        <div className="flex items-center gap-3">
    <div className="hidden md:inline">
    <Search />

    </div>
        <Cart />
        <Menu />
        </div>
      </div>
    </nav>
  );
}

