"use client";

import { PropsWithChildren } from "react";
import queryClient from "../react-query/query-client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>

      <ThemeProvider attribute="class" enableSystem={true}>
        {children}
        <Toaster />
      </ThemeProvider>
      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

Providers.displayName = "Providers";

export { Providers };
