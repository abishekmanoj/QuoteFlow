"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { ForgotPasswordValues, forgotPasswordSchema } from "@/lib/validations/auth";

export default function ForgotPasswordPage() {

  const supabase = React.useMemo(() => createClient(), []);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [successMessage, setSuccessMessage] = React.useState<string | null>(null);

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values: ForgotPasswordValues) => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      setSuccessMessage(null);

      const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${process.env.APP_URL}/auth/reset-password`,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }
      setSuccessMessage("We’ve sent you a password reset link. Please check your inbox.");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10 text-foreground">
      <Card className="w-full max-w-md rounded-3xl border-border/60 bg-card/80 shadow-xl backdrop-blur">
        <CardHeader className="space-y-4 text-center">
          <div className="space-y-1.5">
            <CardTitle className="text-2xl font-semibold tracking-tight">Forgot Password</CardTitle>
            <CardDescription className="text-sm leading-6">
              Enter your email address and we’ll send you a link to reset your password.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>Email Address</FieldLabel>
                  <FieldContent>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="name@company.com"
                        className="h-11 rounded-xl pl-10"
                        disabled={isLoading}
                        {...form.register("email")}
                      />
                    </div>
                  </FieldContent>
                  {form.formState.errors.email && <FieldError>{form.formState.errors.email.message}</FieldError>}
                </Field>
              </FieldGroup>
            </FieldSet>

            {errorMessage && (
              <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-primary">
                {successMessage}
              </div>
            )}

            <Button type="submit" className="h-11 w-full rounded-xl font-medium" disabled={isLoading}>
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="size-4 animate-spin" />
                  Sending reset link...
                </span>
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </form>

          <div className="flex justify-center">
            <Link
              href="/auth"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}