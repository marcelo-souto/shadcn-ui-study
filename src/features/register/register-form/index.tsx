"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import useRegisterForm from "./use-register-form";
import Link from "next/link";

export default function RegisterForm() {
  const { form, onSubmit } = useRegisterForm();

  return (
    <div className="flex flex-col max-w-[320px] w-full space-y-8 m-auto animate-in fade-in-0 slide-in-from-right-10 duration-300">
      <div className="space-y-3">
        <h1 className="scroll-m-20 text-2xl font-bold lg:text-3xl">
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
                    type="password"
                    className="hover:border-zinc-600 transition-all duration-300"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <LoadingButton className="w-full font-medium">Enviar</LoadingButton>
        </form>
      </Form>

      <span className="flex justify-center space-x-1">
        <p>Já tem conta? </p>
        <Link
          href="/login"
          className="text-blue-600 font-medium hover:underline underline-offset-2"
        >
          Faça login
        </Link>
      </span>
    </div>
  );
}
