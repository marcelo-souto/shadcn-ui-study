import { AxiosError, AxiosResponse } from "axios";

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
