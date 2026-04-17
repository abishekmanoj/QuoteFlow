"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2, Lock, Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { ResetPasswordValues, resetPasswordSchema } from "@/lib/validations/auth";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = React.useMemo(() => createClient(), []);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [successMessage, setSuccessMessage] = React.useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);

  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values: ResetPasswordValues) => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      setSuccessMessage(null);

      const { error } = await supabase.auth.updateUser({
        password: values.password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setSuccessMessage("Your password has been reset successfully. Redirecting to sign in...");
      form.reset();

      setTimeout(() => {
        router.replace("/auth");
        router.refresh();
      }, 1500);
      
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
            <CardTitle className="text-2xl font-semibold tracking-tight">Reset Password</CardTitle>
            <CardDescription className="text-sm leading-6">
              Enter your new password below to secure your QuoteFlow account.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FieldSet>
              <FieldGroup>
                <Field data-invalid={!!form.formState.errors.password}>
                  <FieldLabel>New Password</FieldLabel>
                  <FieldContent>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Enter new password"
                        className="h-11 rounded-xl pl-10 pr-10"
                        disabled={isLoading}
                        {...form.register("password")}
                      />
                      <button
                        type="button"
                        onClick={() => setPasswordVisible((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                      >
                        {passwordVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>
                    </div>
                  </FieldContent>
                  {form.formState.errors.password && <FieldError>{form.formState.errors.password.message}</FieldError>}
                </Field>

                <Field data-invalid={!!form.formState.errors.confirmPassword}>
                  <FieldLabel>Confirm New Password</FieldLabel>
                  <FieldContent>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type={confirmPasswordVisible ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="h-11 rounded-xl pl-10 pr-10"
                        disabled={isLoading}
                        {...form.register("confirmPassword")}
                      />
                      <button
                        type="button"
                        onClick={() => setConfirmPasswordVisible((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                      >
                        {confirmPasswordVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>
                    </div>
                  </FieldContent>
                  {form.formState.errors.confirmPassword && <FieldError>{form.formState.errors.confirmPassword.message}</FieldError>}
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
                  Resetting password...
                </span>
              ) : (
                "Reset Password"
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