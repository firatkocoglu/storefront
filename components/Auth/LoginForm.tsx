"use client";
import { post } from "@/lib/clientApi";
import { authSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { errorToastStyle, successToastStyle } from "@/lib/styles/toastStyles";

export function LoginForm() {
  const loginForm = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (data: z.infer<typeof authSchema>) => {
    const { email, password } = data;
    try {
      await post("/login", { email, password }, { withCredentials: true });
      // Handle successful login (e.g., redirect, show message, etc.)
      toast.success("Login successful", {
        style: successToastStyle as React.CSSProperties,
      });
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials and try again.", {
        style: errorToastStyle as React.CSSProperties,
      });
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={loginForm.handleSubmit(handleFormSubmit)} className="space-y-6">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="text"
                placeholder="Your email"
                {...loginForm.register("email")}
              />
              {loginForm.formState.errors.email && (
                <FieldDescription className="text-red-500">
                  {loginForm.formState.errors.email.message}
                </FieldDescription>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...loginForm.register("password")}
              />
              {loginForm.formState.errors.password && (
                <FieldDescription className="text-red-500">
                  {loginForm.formState.errors.password.message}
                </FieldDescription>
              )}
            </Field>
            <Field>
              <Button type="submit">Login</Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}
