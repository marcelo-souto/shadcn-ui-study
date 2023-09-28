import { cn } from "@/lib/utils";
import { ReactNode, createElement, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & Omit<React.ComponentProps<T>, "as" | keyof JSX.IntrinsicElements>;

const Container = <T extends ElementType>({
  as: Element = "div" as T,
  className,
  ...props
}: ContainerProps<T>) => {

  return createElement(Element, {
    ...props,
    className: cn("w-full max-w-5xl mx-auto", className),
  });

};

Container.displayName = "Container";

export { Container };
