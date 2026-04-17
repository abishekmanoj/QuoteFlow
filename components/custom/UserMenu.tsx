"use client";

import { useRouter } from "next/navigation";
import { Settings, LogOut, Sun, Moon, Monitor } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

type UserMenuProps = {
  initials: string;
  fullName: string | null;
  email: string | null;
};

export default function UserMenu({ initials, fullName, email }: UserMenuProps) {

  const router = useRouter();
  const { setTheme } = useTheme();

  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast(error.message)
      return;
    }

    router.replace("/auth");
    router.refresh();
  };

  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <button className="rounded-full outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <Avatar className="h-10 w-10 cursor-pointer ring-1 ring-border/60">
            <AvatarFallback className="bg-primary/10 font-semibold text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-72 rounded-2xl p-2">
        
        <DropdownMenuLabel className="rounded-xl px-3 py-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{fullName ?? "QuoteFlow User"}</span>
            <span className="text-xs font-normal text-muted-foreground">
              {email ?? "No email found"}
            </span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem onClick={() => router.push("/settings")} className="cursor-pointer rounded-xl px-3 py-2.5">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer rounded-xl px-3 py-2.5">
            <Sun className="mr-2 h-4 w-4" />
            Theme
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent className="w-44 rounded-xl p-2">

            <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer rounded-lg px-3 py-2.5">
              <Sun className="mr-2 h-4 w-4" />
              Light
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer rounded-lg px-3 py-2.5">
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer rounded-lg px-3 py-2.5">
              <Monitor className="mr-2 h-4 w-4" />
              System
            </DropdownMenuItem>

          </DropdownMenuSubContent>

        </DropdownMenuSub>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer rounded-xl px-3 py-2.5">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  );
}