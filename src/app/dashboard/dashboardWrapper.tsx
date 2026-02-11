"use client";

import React, {useEffect} from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "../redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode= useAppSelector((state) => state.global.isDarkMode);

  useEffect(() =>{
    if (isDarkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  })

  return (
    <div 
    className={`${isDarkMode ? "dark" : ""} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>

      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 bg-white shadow ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col w-full px-9 py-7">
        <Navbar />
        <main className="mt-7 flex flex-col">{children}</main>
      </div>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
