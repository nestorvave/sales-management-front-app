import React from "react";
import { FaBeer } from "react-icons/fa";
import { Button } from "./button-component";

interface AttendanceRecord {
  name: string;
  dias: string;
}
interface IButtons {
  variant: "main" | "main-outlined";
  label: string;
  execute: () => void;
  icon?: any;
}

interface ITable {
  buttons?: IButtons[];
}

export const Table: React.FC<ITable> = ({ buttons }) => {
  const attendanceColumns = [
    {
      text: "Nombre",
      nameID: "name",
    },
    {
      text: "Días",
      nameID: "dias",
    },
    {
      text: "Elemento",
      nameID: "elemnt",
    },
  ];

  const data: AttendanceRecord[] = [
    {
      dias: "Diario",
      name: "Nestor",
    },
    {
      name: "Juan",
      dias: "Semanal",
    },
    {
      name: "Maria",
      dias: "Mensual",
    },
    {
      name: "Carlos",
      dias: "Diario",
    },
    {
      name: "Laura",
      dias: "Semanal",
    },
    {
      dias: "Diario",
      name: "Nestor",
    },
    {
      name: "Juan",
      dias: "Semanal",
    },
    {
      name: "Maria",
      dias: "Mensual",
    },
    {
      name: "Carlos",
      dias: "Diario",
    },
    {
      name: "Laura",
      dias: "Semanal",
    },
  ];

  return (
    <>
      {buttons && (
        <section className="mb-4 flex flex-col justify-end  gap-3 sm:flex-row ">
          {buttons.map(({ label, variant, execute, icon }, index) => (
            <div>
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
            {attendanceColumns.map(({ text }) => (
              <th key={text} scope="col" className="px-6 py-3">
                {text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((record: any, index: any) => (
            <tr key={index} className="border-b bg-white hover:bg-gray-50">
              {attendanceColumns.map(({ nameID }) => (
                <td key={nameID} className="px-6 py-4">
                  {record[nameID]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
