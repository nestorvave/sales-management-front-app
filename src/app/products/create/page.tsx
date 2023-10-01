"use client";

import useForm from "@/hooks/useForm";
import { ICreate } from "./interface/create-product.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/button-component";
import TextInput from "@/components/text-input.component";

export default function CreateProductPage() {
  const createForm: ICreate = {
    name: "",
    price: 0,
  };

  const { data, handleChange, disabled } = useForm<ICreate>(createForm);
  const { name, price } = data;

  const { data: dt } = useQuery({
    queryKey: ["createProduct"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:4000/api/v1/products");
    },
  });
  console.log(dt);
  return (
    <main>
      <section className=" md:flex  md:justify-end">
        <div className="w-full md:w-2/6 lg:w-1/6 ">
          <Button
            label="Crear producto"
            id="create"
            onClick={() => {}}
            variant="main"
            disabled={disabled()}
          />
        </div>
      </section>
      <section className="grid h-full w-full grid-cols-1 gap-2 md:grid-cols-3">
        <TextInput
          id="id"
          name="name"
          type="text"
          onChange={handleChange}
          value={name}
          label="Name"
          isRequired
          placeholder="here"
        />
        <TextInput
          id="id"
          name="price"
          type="text"
          value={price.toString()}
          onChange={handleChange}
          label="Price"
          isRequired
          placeholder="here"
        />
      </section>
    </main>
  );
}
