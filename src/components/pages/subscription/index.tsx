"use client";

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
import { subscribeAction } from "@/lib/actions/subscribe";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SubmitButton } from "@/components/ui/submit-button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { TSubscriptionFields, subscriptionSchema } from "@/types/types";

const Subscription = () => {
  const { toast } = useToast();

  const form = useForm<TSubscriptionFields>({
    mode: "all",
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmitAction = async (formData: FormData) => {
    const isSubmitable = await form.trigger();

    if (isSubmitable) {
      const response = await subscribeAction(formData);
      if (!response.success) {
        return toast({
          title: response.success ? "Sucesso" : "Erro",
          description: response.message,
          variant: response.success ? "default" : "destructive",
        });
      }
    }
  };

  return (
    <Container
      as="main"
      className="flex justify-center items-center w-screen min-h-screen"
    >
      <motion.div
        className="max-w-[340px] w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 200,
        }}
      >
        <h1 className="text-3xl font-semibold mb-6">Inscreva-se</h1>
        <Form {...form}>
          <form action={onSubmitAction} className="flex flex-col gap-4">
            
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SubmitButton>Enviar</SubmitButton>
          </form>
        </Form>
      </motion.div>
    </Container>
  );
};

Subscription.displayName = "Subscription";

export { Subscription };
