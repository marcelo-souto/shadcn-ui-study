import React from "react";
import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "./button";
import { Slot } from "@radix-ui/react-slot";

export interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    { className, variant, size, asChild = false, isLoading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? "Carregando..." : props.children}
      </Comp>
    );
  }
);

LoadingButton.displayName = "LoadingButton";

export { LoadingButton };
