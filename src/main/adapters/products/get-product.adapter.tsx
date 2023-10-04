import { Product, ProductPreview } from "@/app/domain/models/product/product";
import React from "react";

export const getProductsAdapter = (data: Product[]): ProductPreview[] => {
  const newData = data.map((item: Product) => ({
    price: <>${item.price}</>,
    name: <b>{item.name}</b>,
  }));

  return newData;
};
