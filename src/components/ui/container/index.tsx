import { HTMLProps, createElement } from "react";

type ContainerProps<T extends keyof JSX.IntrinsicElements> = {
  as?: T;
} & HTMLProps<JSX.IntrinsicElements[T]>;

const Container = <T extends keyof JSX.IntrinsicElements>({
  as: Element = "div" as T,
  ...props
}: ContainerProps<T>) => {
  return createElement(Element, { ...props });
};

Container.displayName = "Container";

export { Container };
