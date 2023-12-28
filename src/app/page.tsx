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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function HomePage() {
  const [editMode, setEditMode] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "John Doe",
      gender: undefined,
    },
  });

  return (
    <Container>
      <Button onClick={() => setEditMode(!editMode)}>Editar</Button>

      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input disabled={!editMode} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gênero</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!editMode}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um gênero" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Masculino</SelectItem>
                    <SelectItem value="female">Feminino</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </form>
      </Form>

      {JSON.stringify(form.watch())}
    </Container>
  );
}
