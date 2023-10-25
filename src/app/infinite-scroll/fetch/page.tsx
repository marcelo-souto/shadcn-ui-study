"use client";

import { useIntersectionObserver } from "@/utils/hooks/use-intersection-observer";
import { useEffect, useState } from "react";

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

export default function InfiniteScrollPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchProducts = async (skip = 0, limit = 12) => {
    setLoading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );

    const data = (await response.json()) as ProductResponse;
    if (data.total <= skip + limit) setHasNextPage(false);

    setLoading(false);

    return data.products;
  };

  useEffect(() => {
    void fetchProducts().then(setData);
  }, []);

  const lastProductRef = useIntersectionObserver<HTMLLIElement>(() => {
    void fetchProducts(data.length).then((newProducts) => {
      setData((prev) => [...prev, ...newProducts]);
    });
  }, [hasNextPage]);

  return (
    <div className="max-w-6xl mx-auto">
      <ul className="grid grid-cols-3 gap-4">
        {data.map((product, index, products) => {
          return (
            <li
              key={index}
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
          );
        })}
      </ul>

      {loading && (
        <div className="text-2xl font-bold text-zinc-200 text-center">
          Carregando ...
        </div>
      )}
    </div>
  );
}
