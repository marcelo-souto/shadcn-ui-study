import { authService } from "@/services/auth/auth-service";
import { UserCredentials } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginFieldsSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório.")
    .email("Insira um email válido."),
  password: z.string().nonempty("Campo obrigatório."),
  remind: z.boolean().default(false),
});

type LoginProps = z.infer<typeof LoginFieldsSchema>;

export default function useLoginForm() {
  
  const form = useForm<LoginProps>({
    resolver: zodResolver(LoginFieldsSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remind: false,
    },
  });

  const { mutate, isLoading, isSuccess, data, isError, error } = useMutation({

    mutationFn: ({ email, password }: UserCredentials) => authService.login({ email, password }),

    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  });

  const onSubmit = ({ email, password }: LoginProps) =>
    mutate({ email, password });

  return { onSubmit, isLoading, form, isSuccess, isError, data, error };
}
