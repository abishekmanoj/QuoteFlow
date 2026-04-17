import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10 text-foreground">
      <div className="w-full max-w-2xl">
        <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card/80 shadow-xl backdrop-blur">
          <div className="border-b border-border/60 px-6 py-6 sm:px-8">
            <div className="flex items-center gap-3">
                <p className="text-sm font-semibold tracking-tight">QuoteFlow</p>
                <p className="text-xs text-muted-foreground">Sales workspace</p>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-8 sm:py-12">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <SearchX className="size-7" />
              </div>

              <div className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                Error 404
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Page not found
              </h1>

              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                The page you’re looking for doesn’t exist, may have been moved,
                or the link may be incorrect.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-xl">
                  <Link href="/dashboard">
                    <Home className="mr-2 size-4" />
                    Go to Dashboard
                  </Link>
                </Button>

                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/">
                    <ArrowLeft className="mr-2 size-4" />
                    Back to Home
                  </Link>
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}