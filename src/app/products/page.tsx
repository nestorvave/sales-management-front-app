"use client";
import { FaBeer } from "react-icons/fa";

import { useRouter } from "next/navigation";
import { Table } from "@/components/table-component";

export default function ProductsPage() {
  const router = useRouter();
  return (
    <main className="w-full">
      <Table
        buttons={[
          {
            variant: "main",
            label: "Nuevo producto",
            execute: () => router.push("/products/create"),
          },
        ]}
      />
    </main>
  );
}
