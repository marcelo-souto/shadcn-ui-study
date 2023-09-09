import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerFieldsSchema = z.object({
  name: z.string().nonempty("Campo obrigatório."),
  email: z
    .string()
    .nonempty("Campo obrigatório.")
    .email("Insira um email válido."),
  password: z
    .string()
    .nonempty("Campo obrigatório.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
      "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula e um número."
    ),
});

type RegisterFieldsProps = z.infer<typeof registerFieldsSchema>;

export default function useRegisterForm() {
  
  const form = useForm<RegisterFieldsProps>({
    mode: "all",
    resolver: zodResolver(registerFieldsSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = (data: RegisterFieldsProps) => console.log(data);

  return { form, onSubmit };
}
