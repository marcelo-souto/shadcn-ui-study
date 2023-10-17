import { DependencyList, useCallback, useRef } from "react";

const useIntersectionObserver = <T extends HTMLElement>(
  callback: () => void,
  deps: DependencyList
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (node: T) => {
      if (deps.every(Boolean)) {
        observer.current?.disconnect();
        observer.current = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) callback();
        });
      }

      if (node) observer.current?.observe(node);
    },
    [deps, callback]
  );

  return ref;
};

export { useIntersectionObserver };
