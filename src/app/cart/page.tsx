"use client";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import useCart from "@/utils/hooks/use-cart";
import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://picsum.photos/id/1/200/200",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://picsum.photos/id/2/200/200",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/id/3/200/200",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image: "https://picsum.photos/id/4/200/200",
  },
];

export default function CartPage() {
  const cart = useCart({ uniqueKey: "id" });

  return (
    <Container as="main">
      <div>
        <ul className="flex gap-4 justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover object-center"
              />
              <div className="flex flex-col gap-1 p-4">
                <h3 className="font-semibold text-zinc-200">{product.name}</h3>
                <p className="text-sm text-zinc-400">
                  {product.price.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
                </p>
                <Button
                  onClick={() => cart.add(product)}
                  size="sm"
                  variant="outline"
                  className="mt-3"
                >
                  Adicionar
                </Button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </Container>
  );
}
