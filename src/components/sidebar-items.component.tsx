import Link from "next/link";
import React from "react";

interface ISidebarItems {
  icon: React.ReactNode;
  text: string;
  expanded: boolean;
  path: string;
}

export const SidebarItems = ({ icon, text, expanded, path }: ISidebarItems) => {
  return (
    <li>
      <Link
        className={`relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium text-black transition-colors ${
          false
            ? "bg-gradient-to-tr from-orageLight to-orangeLighter text-indigo-800 "
            : "text-gray-600 hover:bg-mainOrange"
        } `}
        href={path}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "ml-3 w-52" : "w-0"
          } `}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};
