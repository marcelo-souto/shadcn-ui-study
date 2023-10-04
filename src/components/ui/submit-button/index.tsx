import React from "react";
import { Button, buttonVariants } from "../button";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface SubmitButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const SubmitButton = ({
  className,
  variant,
  size,
  children,
  ...props
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={pending}
      {...props}
    >
      {pending ? "Carregando..." : children}
    </Button>
  );
};

SubmitButton.displayName = "SubmitButton";

export { SubmitButton };