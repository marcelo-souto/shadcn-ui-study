"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";

import {
  useRegisterEmployeeForm,
  genderOptions,
  jobOptions,
} from "./use-register-employee-form";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import * as DialogPrimitive from "@radix-ui/react-dialog";

const RegisterEmployeeForm = () => {
  
  const { form, onSubmit } = useRegisterEmployeeForm();

  return (
    <div className="flex items-center h-screen max-w-xl m-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-4 p-6 border-2 border-zinc-100 rounded-xl animate-in zoom-in-0 duration-300"
        >
          <h1 className="flex flex-col gap-2 text-2xl font-semibold text-zinc-700">
            Informações Pessoais
          </h1>
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
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
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
                    {...field}
                  />
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
                <FormLabel>Sexo</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-2"
                  >
                    {genderOptions.map((option) => (
                      <FormItem
                        key={option.value}
                        className="flex items-center space-x-1 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={option.value} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="job"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Área / Especialidade</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-zinc-900">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jobOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button size="sm" className="w-fit self-end">
            Excluir
            <ArrowRight className="ml-2 w-4" />
          </Button>
        </form>
      </Form>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>

        <DialogContent>
          <DialogHeader className="border-b-2 border-zinc-200 pb-4">
            <DialogTitle>Tem certeza que deseja excluir?</DialogTitle>
          </DialogHeader>

          <DialogDescription>
            Ao excluir esta informação, você não poderá recuperá-la.
          </DialogDescription>

          <DialogFooter>
            <Button size="sm" variant="destructive">
              Excluir
            </Button>
            <DialogPrimitive.Close asChild>
              <Button size="sm">Cancelar</Button>
            </DialogPrimitive.Close>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

RegisterEmployeeForm.displayName = "RegisterEmployeeForm";

export { RegisterEmployeeForm };
