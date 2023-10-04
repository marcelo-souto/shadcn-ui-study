import { AxiosError, AxiosResponse } from "axios";
import { z } from "zod";

export type UserCredentials = {
  email: string;
  password: string;
};

export type ApiResponse<T = unknown> = {
  message: string;
  data: T;
  success: boolean;
};

export type ApiSuccessResponse<T = unknown> = AxiosResponse<ApiResponse<T>>;
export type ApiErrorResponse = AxiosError<ApiResponse<string>>;

export type User = {
  id: number;
  email: string;
  password: string;
};

export type Game = {
  title: string;
  image: string;
  category: string;
  description: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const subscriptionSchema = z.object({
  name: z.string().nonempty({ message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .nonempty({ message: "Senha é obrigatória" })
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

export type TSubscriptionFields = z.infer<typeof subscriptionSchema>;
