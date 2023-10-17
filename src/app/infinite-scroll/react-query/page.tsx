"use client";

import { useIntersectionObserver } from "@/utils/hooks/use-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductResponse = {
  products: Product[];
  total: number;
  limit: number;
  skip: number;
};

const BASE_URL = "https://dummyjson.com";

export default function InfiniteQueryWithReactQuery() {
  console.log("FUNCAO ACIONADA");

  const fetchProducts = async (skip = 0, limit = 10) => {
    const response = await fetch(
      `${BASE_URL}/products?limit=${limit}&skip=${skip}`
    );

    const data = (await response.json()) as ProductResponse;
    return data;
  };

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: async ({ pageParam = 0 }) => fetchProducts(Number(pageParam)),
    getNextPageParam: (lastPage) => {
      console.log(lastPage);

      const cursor = lastPage.skip + lastPage.limit;

      if (lastPage.total >= cursor || lastPage.limit) return cursor;
    },
    select: (data) => ({
      ...data,
      pages: data.pages.map((page) => page.products),
    }),
  });

  const lastProductRef = useIntersectionObserver<HTMLLIElement>(() => {
    fetchNextPage();
  }, [hasNextPage]);

  return (
    <div className="max-w-6xl mx-auto">
      <ul className="grid grid-cols-3 gap-4">
        {data?.pages.flat().map((product, index, products) => (
          <li
            key={product.id}
            className="p-4 rounded-lg border border-zinc-800"
            ref={products.length - 1 === index ? lastProductRef : null}
          >
            <h2 className="font-semibold text-xl text-zinc-200 mb-4">
              {product.title}
            </h2>
            <p className="line-clamp-3 mb-2 text-zinc-400">
              {product.description}
            </p>
            <p className="font-semibold text-lg">R$ {product.price}</p>
          </li>
        ))}
      </ul>

      {isLoading && (
        <div className="text-2xl font-bold text-zinc-200 text-center">
          Carregando ...
        </div>
      )}
    </div>
  );
}
