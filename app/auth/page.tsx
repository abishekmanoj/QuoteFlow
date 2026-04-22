"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Mail, Lock, User2, Eye, EyeClosed } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SignInValues, signInSchema, SignUpValues, signUpSchema } from "@/lib/validations/auth";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";


type AuthTab = "signin" | "signup";

export default function AuthPage() {

    const [tab, setTab] = useState<AuthTab>("signin");
    const [isPending, setPending ] = useState(false)
    const [passwordVisibility, setPasswordVisibility] = useState(true)

    const router = useRouter()
    const supabase = createClient()

    const toggleVisibility = () => {
        setPasswordVisibility((prev) => !prev)
    }

    const signInForm = useForm<SignInValues>({
        resolver: zodResolver(signInSchema),
        defaultValues: { email: "", password: "" },
        mode: "onTouched",
    });

    const signUpForm = useForm<SignUpValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
        mode: "onTouched",
    });


    const onSignIn = async (values: SignInValues) => {
        try {
            setPending(true)
            const { error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password,
            });

            if (error) {
                toast(error.message)
                return;
            }

            toast("Signed in successfully.")

            router.push("/dashboard");
            router.refresh();

        } catch (error) {
            console.log(error);
        } finally {
            setPending(false)
        }

    };

    const onSignUp = async (values: SignUpValues) => {
        try {
            setPending(true)
            const { error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
                options: {
                    emailRedirectTo: `${process.env.APP_URL}/auth/callback`,
                    data: {
                        name: values.name,
                    },
                },
        });

        if (error) {
            toast(error.message)
            return;
        }

        toast("Check your email for verification link and then signin to your account.")

        } catch (error) {
        console.log(error);
        } finally {
            setPending(false)
        }

    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10 text-foreground">
    <Card className="w-full max-w-md rounded-3xl border border-white/20 bg-white/50 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <CardHeader className="space-y-2 pb-4 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">QuoteFlow</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Sign in or create your account</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <Tabs value={tab} onValueChange={(value) => setTab(value as AuthTab)} className="w-full">
          <TabsList className="grid h-11 w-full grid-cols-2 rounded-2xl border border-white/15 bg-white/40 p-1 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <TabsTrigger
              value="signin"
              className="rounded-xl text-sm font-medium text-muted-foreground transition-all data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-sm dark:data-[state=active]:bg-white/10"
            >
              Sign In
            </TabsTrigger>

            <TabsTrigger
              value="signup"
              className="rounded-xl text-sm font-medium text-muted-foreground transition-all data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-sm dark:data-[state=active]:bg-white/10"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* SIGN IN */}
        <div className={cn(tab !== "signin" && "hidden")}>
          <form onSubmit={signInForm.handleSubmit(onSignIn)} className="space-y-5">
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <FieldContent>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="name@email.com" className="h-11 rounded-xl border-white/15 bg-white/50 pl-10 dark:border-white/10 dark:bg-white/5" {...signInForm.register("email")} />
                    </div>
                  </FieldContent>
                  {signInForm.formState.errors.email && <FieldError>{signInForm.formState.errors.email.message}</FieldError>}
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <FieldContent>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input type={passwordVisibility ? "password" : "text"} placeholder="Enter your password" className="h-11 rounded-xl border-white/15 bg-white/50 pl-10 dark:border-white/10 dark:bg-white/5" {...signInForm.register("password")} />
                      <button type="button" onClick={toggleVisibility} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground">
                        {passwordVisibility ? <Eye className="size-4" /> : <EyeClosed className="size-4" />}
                      </button>
                    </div>

                    <Link href="/auth/forgot-password" className="mr-1 flex justify-end text-xs text-muted-foreground transition hover:text-foreground">
                      Forgot Password?
                    </Link>
                  </FieldContent>
                  {signInForm.formState.errors.password && <FieldError>{signInForm.formState.errors.password.message}</FieldError>}
                </Field>
              </FieldGroup>
            </FieldSet>

            <Button type="submit" className="h-11 w-full rounded-xl font-medium">
              {isPending ? (
                <>
                  <span>Signing in ...</span>
                  <Spinner />
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </div>

        {/* SIGN UP */}
        <div className={cn(tab !== "signup" && "hidden")}>
          <form onSubmit={signUpForm.handleSubmit(onSignUp)} className="space-y-5">
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <FieldContent>
                    <div className="relative">
                      <User2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Your full name" className="h-11 rounded-xl border-white/15 bg-white/50 pl-10 dark:border-white/10 dark:bg-white/5" {...signUpForm.register("name")} />
                    </div>
                  </FieldContent>
                  {signUpForm.formState.errors.name && <FieldError>{signUpForm.formState.errors.name.message}</FieldError>}
                </Field>

                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <FieldContent>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="name@email.com" className="h-11 rounded-xl border-white/15 bg-white/50 pl-10 dark:border-white/10 dark:bg-white/5" {...signUpForm.register("email")} />
                    </div>
                  </FieldContent>
                  {signUpForm.formState.errors.email && <FieldError>{signUpForm.formState.errors.email.message}</FieldError>}
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <FieldContent>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input type={passwordVisibility ? "password" : "text"} placeholder="Create a password" className="h-11 rounded-xl border-white/15 bg-white/50 pl-10 dark:border-white/10 dark:bg-white/5" {...signUpForm.register("password")} />
                      <button type="button" onClick={toggleVisibility} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground">
                        {passwordVisibility ? <Eye className="size-4" /> : <EyeClosed className="size-4" />}
                      </button>
                    </div>
                  </FieldContent>
                  {signUpForm.formState.errors.password && <FieldError>{signUpForm.formState.errors.password.message}</FieldError>}
                </Field>

                <Field>
                  <FieldLabel>Confirm Password</FieldLabel>
                  <FieldContent>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input type={passwordVisibility ? "password" : "text"} placeholder="Confirm your password" className="h-11 rounded-xl border-white/15 bg-white/50 pl-10 dark:border-white/10 dark:bg-white/5" {...signUpForm.register("confirmPassword")} />
                    </div>
                  </FieldContent>
                  {signUpForm.formState.errors.confirmPassword && <FieldError>{signUpForm.formState.errors.confirmPassword.message}</FieldError>}
                </Field>
              </FieldGroup>
            </FieldSet>

            <Button type="submit" className="h-11 w-full rounded-xl font-medium">
              {isPending ? (
                <>
                  <span>Creating account ...</span>
                  <Spinner />
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  </div>
    )
}