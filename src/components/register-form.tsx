"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "./ui/form";
import { Input } from "./ui/input";
import { LoadingButton } from "./ui/loading-button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerFieldsSchema = z.object({
  name: z.string().nonempty("Campo obrigatório."),
  email: z
    .string()
    .nonempty("Campo obrigatório.")
    .email("Insira um email válido."),
  password: z.string().nonempty("Campo obrigatório.").regex((value) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g.test(value)
  }),
});

type RegisterFieldsSchema = z.infer<typeof registerFieldsSchema>;

export default function RegisterForm() {
  const form = useForm<RegisterFieldsSchema>({
    mode: "all",
    resolver: zodResolver(registerFieldsSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = (data: RegisterFieldsSchema) => console.log(data);

  return (
    <main className="h-screen flex m-auto items-center">
      <div className="flex flex-col max-w-[320px] w-full space-y-8 m-auto animate-in fade-in-30 zoom-in-50 duration-300">

        <div className="space-y-3">
          <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
            Crie sua conta
          </h1>
          <p className="text-sm font-normal text-zinc-500">
            Faça parte da nossa transformação.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
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

            <LoadingButton className="w-full font-medium">Entrar</LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  );
}
