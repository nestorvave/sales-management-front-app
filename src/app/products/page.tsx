"use client";
import { useRouter } from "next/navigation";
import { Table } from "@/components/table-component";
import { useGetProducts } from "@/app/domain/use-cases/product/get-products.use-cases";

import { productHeaderTable } from "./utils/product-table-columns.utils";
import { ProductPreview } from "../domain/models/product/product";
import { getProductsAdapter } from "@/main/adapters/products/get-product.adapter";

interface I {
  data: [];
}

export default function ProductsPage() {
  const router = useRouter();

  const { data, isLoading } =
    useGetProducts<ProductPreview>(getProductsAdapter);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <main className="w-full">
      <Table<ProductPreview>
        buttons={[
          {
            variant: "main",
            label: "Nuevo producto",
            execute: () => router.push("/products/create"),
          },
        ]}
        columns={productHeaderTable}
        data={data}
      />
    </main>
  );
}
