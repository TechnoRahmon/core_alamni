import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
export default function AdminLayout() {
  // Consume the context

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Header />

      <div className="p-4 mt-10">
        <Outlet />
      </div>
    </div>
  );
}
