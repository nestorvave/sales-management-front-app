import { axiosClient } from "@/api/axios-instance.api";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../models/product/product";

export const useGetProducts = <IDefaultResponse>(
  adapter: (data: Product[]) => IDefaultResponse[]
): any => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Product"],
    queryFn: async () => {
      const { data } = await axiosClient.get<Product[]>("/products");
      const response = adapter(data);
      return response as IDefaultResponse[];
    },
  });

  return { data, isError, isLoading };
};
