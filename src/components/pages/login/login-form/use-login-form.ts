import { loginAction } from "@/lib/actions/login";
import { userCredentials } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = userCredentials.extend({
  remind: z.boolean(),
});

type TLoginSchema = z.infer<typeof loginSchema>;

export default function useLoginForm() {
  
  const [error, setError] = useState<string | null>(null);

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remind: false,
    },
  });

  const onSubmitAction = async (formData: FormData) => {
    const isSubmitable = await form.trigger();

    if (isSubmitable) {
      const response = await loginAction(formData);
      if (!response.success) setError(response.message);
    }
  };

  return { form, error, onSubmitAction };
}
