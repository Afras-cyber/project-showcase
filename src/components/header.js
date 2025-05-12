import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-blue-500 w-full shadow-lg fixed top-0 z-50">
      <div className="container mx-auto py-3 px-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">PS</Link>
          <nav className="space-x-4">
            <Link href="/" className="text-white hover:text-blue-200">
              Home
            </Link>

            <Link href="/products" className="text-white hover:text-blue-200">
              Shop
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-200">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
