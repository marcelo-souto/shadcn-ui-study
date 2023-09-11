import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const genderOptions = [
  { value: "masculino", label: "Masculino" },
  { value: "feminino", label: "Feminino" },
  { value: "outro", label: "Outro" },
];

const jobOptions = [
  { value: "desenvolvedor", label: "Desenvolvedor" },
  { value: "designer", label: "Designer" },
  { value: "gerente", label: "Gerente" },
  { value: "outro", label: "Outro" },
];

const RegisterEmployeeFieldsSchema = z.object({
  name: z.string().nonempty("Campo obrigatório."),
  surname: z.string().nonempty("Campo obrigatório."),
  gender: z.enum(["masculino", "feminino", "outro"], {
    required_error: "Campo obrigatório.",
  }),
  email: z
    .string()
    .nonempty("Campo obrigatório.")
    .email("Insira um email válido."),
  job: z
    .string({ required_error: "Campo obrigatório" })
    .nonempty("Campo obrigatório."),
});

type RegisterEmployeeFields = z.infer<typeof RegisterEmployeeFieldsSchema>;

const useRegisterEmployeeForm = () => {
  const form = useForm<RegisterEmployeeFields>({
    mode: "all",
    resolver: zodResolver(RegisterEmployeeFieldsSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
    },
  });

  const {
    formState: { isValid },
  } = form;

  const onSubmit = (data: RegisterEmployeeFields) => console.log(data);

  return { form, onSubmit, isValid };
};

export { useRegisterEmployeeForm, genderOptions, jobOptions };
