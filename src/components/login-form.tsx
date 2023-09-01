"use client";

import { LoadingButton } from "@/components/ui/loading-button";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "@tanstack/react-query";

const loginCredentialsSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório.")
    .email("Insira um email válido."),
  password: z.string().nonempty("Campo obrigatório."),
  remind: z.boolean().default(false),
});

type LoginCredentialsSchema = z.infer<typeof loginCredentialsSchema>;

export default function LoginForm() {
  const form = useForm<LoginCredentialsSchema>({
    resolver: zodResolver(loginCredentialsSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remind: false,
    },
  });

  const { mutate, isLoading, data } = useMutation({

    mutationFn: async ({ email, password }: Omit<LoginCredentialsSchema, "remind">) => {
      
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      return data;
    },
    onSuccess: (data) => console.log(data),
  });

  const onSubmit = ({ email, password }: LoginCredentialsSchema) =>
    mutate({ email, password });

  return (
    <main className="h-screen flex m-auto items-center">
      <div className="flex flex-col max-w-[320px] w-full space-y-8 m-auto animate-in fade-in-30 zoom-in-50 duration-300">
        
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
          Login
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="hover:border-zinc-600 transition-all duration-300"
                      placeholder="usuario@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      className="hover:border-zinc-600 transition-all duration-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="remind"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <div className="space-y-1 leading-none">
                    <FormLabel>Aceito os termos de uso</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <LoadingButton isLoading={isLoading} className="w-full font-medium">
              Entrar
            </LoadingButton>

          </form>
        </Form>

      </div>
    </main>
  );
}
