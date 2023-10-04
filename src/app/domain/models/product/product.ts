export interface Product {
  createdAt: Date;
  id: 1;
  image: string | React.JSX.Element;
  name: string | React.JSX.Element;
  price: number | React.JSX.Element;
  updatedAt: Date;
}

export type ProductPreview = Pick<Product, "name" | "price"> & {
  actions?: React.JSX.Element;
};
