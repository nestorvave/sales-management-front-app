import React from "react";
import { Sidebar } from "./sidebar.component";
export const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-screen">
      <Sidebar />
      <section className="m-2 flex w-full flex-col overflow-hidden rounded-2xl border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <header className=" flex h-16 items-center justify-start border-b-2 border-gray-100 p-4 ">
          <h1 className="tracking-widest">Manage products</h1>
        </header>
        <main className="p-5">{children}</main>
      </section>
    </main>
  );
};
