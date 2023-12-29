import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
export default function AdminLayout() {
  // Consume the context

  return (
    <div className="w-3/4 flex m-4 justify-center ml-auto">
      <Header />

      <div className="p-4 mt-10">
        <Outlet />
      </div>
    </div>
  );
}
