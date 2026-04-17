import { createClient } from "@/lib/supabase/server";
import UserMenu from "./UserMenu";


function getInitials(name?: string | null, email?: string | null) {
  if (name && name.trim()) {
    const parts = name.trim().split(" ").filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
  }

  if (email) return email.slice(0, 2).toUpperCase();

  return "US";
}

export default async function Navbar() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  const user = data.user;
  const fullName = (user?.user_metadata?.name as string | undefined) ?? (user?.user_metadata?.full_name as string | undefined) ?? null;
  const email = user?.email ?? null;
  const initials = getInitials(fullName, email);

  return (
    <header className="sticky top-0 z-40 flex h-15 items-center justify-between border-b border-border/60 bg-background/80 px-4 backdrop-blur-xl sm:px-6">
      <h1 className="text-lg font-semibold tracking-tight">
        <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          QUOTEFLOW
        </span>
      </h1>

      <UserMenu initials={initials} fullName={fullName} email={email} />
      
    </header>
  );
}