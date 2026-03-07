"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="fixed top-0 shadow lg:w-[35%] bg-white rounded-xl mt-4 py-2 px-4 lg:px-0">
          <div className="flex space-x-8 justify-center text-sm font-semibold">
            {/* Home */}
            <Link href="/">
              <div
                className={`text-sm font-medium ${
                  currentRoute === "/" ? "text-green-600" : "text-gray-700"
                }`}
              >
                Home
              </div>
            </Link>

            {/* About */}
            <Link href="/about">
              <div
                className={`text-sm font-medium ${
                  currentRoute === "/about" ? "text-green-600" : "text-gray-700"
                }`}
              >
                About
              </div>
            </Link>

            {/* Experience */}
            <Link href="/experience">
              <div
                className={`text-sm font-medium ${
                  currentRoute === "/experience"
                    ? "text-green-600"
                    : "text-gray-700"
                }`}
              >
                Experience
              </div>
            </Link>

            {/* Projects */}
            <Link href="/projects">
              <div
                className={`text-sm font-medium ${
                  currentRoute === "/projects"
                    ? "text-green-600"
                    : "text-gray-700"
                }`}
              >
                Projects
              </div>
            </Link>

            {/* Contact */}
            <Link href="/contact">
              <div
                className={`text-sm font-medium ${
                  currentRoute === "/contact"
                    ? "text-green-600"
                    : "text-gray-700"
                }`}
              >
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
