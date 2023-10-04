'use client'
import React from "react";
import { Button } from "./button-component";
import { IColumns } from "@/interfaces/default-table-column";

interface IButtons {
  variant: "main" | "main-outlined";
  label: string;
  execute: () => void;
  icon?: any;
}

interface ITableProps<T> {
  buttons?: IButtons[];
  columns: IColumns[];
  data: T[];
}

export const Table = <T extends {}>({
  buttons,
  columns,
  data,
}: ITableProps<T>) => (
  <>
    {buttons && (
      <section className="mb-4 flex flex-col justify-end gap-3 sm:flex-row">
        {buttons.map(({ label, variant, execute, icon }, index) => (
          <div key={`${label}-${index}`}>
            <Button
              label={label}
              id={`${label}-${index}`}
              variant={variant as any}
              onClick={execute}
              icon={icon}
            />
          </div>
        ))}
      </section>
    )}
    <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
      <thead className="bg-gray-100 text-left text-xs uppercase text-gray-700">
        <tr>
          {columns.map(({ text }: IColumns, index) => (
            <th key={`${index} - ${text}`} scope="col" className="px-6 py-3">
              <span>{text}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => (
          <tr key={index} className="border-b bg-white hover:bg-gray-50">
            {columns.map(({ nameID }: IColumns) => (
              <td key={nameID} className="px-6 py-4">
                <span>{item[nameID] || ""}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
