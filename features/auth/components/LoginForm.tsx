"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const loginFormSchema = z.object({});

type LoginFormType = z.infer<typeof loginFormSchema>;

function LoginForm() {
  const {} = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  return <div>LoginForm</div>;
}

export default LoginForm;
