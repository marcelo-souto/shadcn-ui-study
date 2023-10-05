"use client";

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
import { SubmitButton } from "@/components/ui/submit-button";

const LoginForm = () => {

  const { form, error, onSubmitAction } = useLoginForm();

  return (
    <div className="flex flex-col max-w-[320px] w-full space-y-8 m-auto animate-in fade-in-0 slide-in-from-right-10 duration-300">
      <h1 className="scroll-m-20 text-2xl font-bold lg:text-3xl">Login</h1>

      <Form {...form}>
        <form action={onSubmitAction} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="usuario@email.com" {...field} />
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
                  <Input {...field} />
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

          <SubmitButton className="w-full font-medium">Entrar</SubmitButton>
        </form>
      </Form>

      {error && (
        <Alert variant="destructive">
          <AlertOctagon className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
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
};

LoginForm.displayName = "LoginForm";

export { LoginForm };
