"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `
    fixed top-0 left-0 h-full z-40
    flex flex-col
    bg-white shadow-md
    transition-all duration-300
    ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"}
    overflow-hidden
  `;

  return (
    <div className={sidebarClassNames}>
      
      {/* TOP LOGO */}
      <div className="flex items-center justify-between px-6 pt-8">
        
        <div className="flex items-center gap-3">
          <div className="font-bold text-lg">Logo</div>

          {!isSidebarCollapsed && (
            <h1 className="font-extrabold text-2xl">
              EdStock
            </h1>
          )}
        </div>

        {/* Toggle Button (mobile only) */}
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 transition"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8 px-6">
        {!isSidebarCollapsed && (
          <div className="space-y-4">
            <p className="cursor-pointer text-gray-700 hover:text-blue-500">
              Dashboard
            </p>
            <p className="cursor-pointer text-gray-700 hover:text-blue-500">
              Products
            </p>
            <p className="cursor-pointer text-gray-700 hover:text-blue-500">
              Reports
            </p>
          </div>
        )}
      </div>

      {/* FOOTER */}
      {!isSidebarCollapsed && (
        <div className="p-4">
          <p className="text-center text-xs text-gray-500">
            © 2024 EdStock
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
