"use client";

import { useIntersectionObserver } from "@/utils/hooks/use-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { forwardRef, useRef } from "react";

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

const Product = forwardRef<HTMLLIElement, Product>(
  ({ id, thumbnail, title, description, price }, ref) => {
    const ref2 = useRef();
    return (
      <li
        key={id}
        className="rounded-lg border border-zinc-800 overflow-hidden shadow-xl shadow-zinc-950"
        ref={ref}
      >
        <div className="relative aspect-video">
          <Image
            src={thumbnail}
            alt={title}
            fill={true}
            className="object-cover object-center"
          />
        </div>

        <div className="p-4">
          <h2 className="font-semibold text-xl text-zinc-200 mb-4">{title}</h2>
          <p className="line-clamp-2 mb-2 text-zinc-400">{description}</p>
          <p className="font-semibold text-lg">R$ {price}</p>
        </div>
      </li>
    );
  }
);

Product.displayName = "Product";

export default function InfiniteQueryWithReactQuery() {
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
      const cursor = lastPage.skip + lastPage.limit;
      if (lastPage.products.length) return cursor;
    },
    select: (data) => ({
      ...data,
      pages: data.pages.map((page) => page.products),
    }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const lastProductRef = useIntersectionObserver<HTMLLIElement>(() => {
    fetchNextPage();
  }, [hasNextPage]);

  return (
    <div className="max-w-6xl mx-auto pt-8 px-4">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-8">
        Produtos
      </h1>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {data?.pages.flat().map((product, index, products) => (
          <Product
            {...product}
            key={product.id}
            ref={index === products.length - 1 ? lastProductRef : null}
          />
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
