"use client";
import { useState } from "react";
import { RiExpandLeftLine, RiExpandRightLine } from "react-icons/ri";
import { menuItems } from "../utils/menu-items-list.utils";
import { SidebarItems } from "./sidebar-items.component";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <aside className="m-2 w-auto">
      <nav className="flex h-full flex-col rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
        <div className="flex items-center justify-end p-4 pb-2 text-black">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
          >
            {sidebarOpen ? (
              <RiExpandRightLine className="text-black" />
            ) : (
              <RiExpandLeftLine className="text-black" />
            )}
          </button>
        </div>
        <ul className="flex-1 px-3">
          {menuItems.map(({ text, icon, path }) => (
            <SidebarItems
              text={text}
              icon={icon}
              expanded={sidebarOpen}
              path={path}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
