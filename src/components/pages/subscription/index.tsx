"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { subscriptionAction } from "@/lib/actions/subscription";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const subscriptionFieldsSchema = z.object({
  name: z.string().nonempty({ message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
});

type TSubscriptionFields = z.infer<typeof subscriptionFieldsSchema>;

const Subscription = () => {
  
  const form = useForm<TSubscriptionFields>({
    mode: "all",
    resolver: zodResolver(subscriptionFieldsSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data: TSubscriptionFields) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    subscriptionAction(formData);
  };

  return (
    <Container as="main" className="max-w-xs">
      <h1 className="text-xl font-semibold mb-6">Inscreva-se</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input placeholder="usuario@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button size="sm">Enviar</Button>
        </form>
      </Form>
    </Container>
  );
};

Subscription.displayName = "Subscription";

export { Subscription };
