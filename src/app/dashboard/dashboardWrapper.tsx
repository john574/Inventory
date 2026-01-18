import React from 'react'
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
return ( <div className="flex bg-gray-100 text-gray-900 w-full min-h-screen">

  {/* Sidebar */}
  <div className="w-64 bg-white h-full shadow">
    <Sidebar/>
  </div>

  {/* Main Content Wrapper */}
  <div className="flex flex-col w-full h-full py-7 px-9 bg-gray-200">

    {/* Navbar at the TOP */}
    <Navbar/>

    {/* Page content */}
    <main className="flex flex-col w-full h-full mt-7">
      {children}
    </main>

  </div>
</div>


);
};

export default DashboardWrapper;
