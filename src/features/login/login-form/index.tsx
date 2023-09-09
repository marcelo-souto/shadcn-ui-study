"use client";

import { LoadingButton } from "@/components/ui/loading-button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import useLoginForm from "./use-login-form";
import Link from "next/link";
import { AlertOctagon } from "lucide-react";

export default function LoginForm() {
  
  const { form, onSubmit, isLoading, isSuccess, isError, data, error } = useLoginForm();

  return (
    <div className="flex flex-col max-w-[320px] w-full space-y-8 m-auto animate-in fade-in-0 slide-in-from-right-10 duration-300">
      <h1 className="scroll-m-20 text-2xl font-bold lg:text-3xl">Login</h1>

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
              <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <div className="space-y-1 leading-none">
                  <FormLabel>Lembrar de mim</FormLabel>
                </div>
              </FormItem>
            )}
          />

          <LoadingButton isLoading={isLoading} className="w-full font-medium">
            Entrar
          </LoadingButton>
        </form>
      </Form>

      {isError && (
        <Alert variant="destructive">
          <AlertOctagon className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{error?.message}</AlertDescription>
        </Alert>
      )}

      <span className="flex justify-center space-x-1">
        <p>Não tem conta? </p>
        <Link
          href="login/register"
          className="text-blue-600 font-medium hover:underline underline-offset-2"
        >
          Cadastre-se
        </Link>
      </span>
    </div>
  );
}
