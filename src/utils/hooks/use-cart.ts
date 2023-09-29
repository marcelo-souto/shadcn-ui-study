import React from "react";

export default function useCart<T extends { [key: string]: any }>({
  uniqueKey,
}: {
  uniqueKey: string;
}) {
  const [items, seiItems] = React.useState<T[]>([]);

  const add = (product: T) => {
    seiItems((state) => [...state, product]);
  };

  const remove = (id: number) => {
    seiItems((state) => state.filter((product) => product[uniqueKey] !== id));
  };

  const clear = () => {
    seiItems([]);
  };

  return {
    items,
    add,
    remove,
    clear,
  };
}
