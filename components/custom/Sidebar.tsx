"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeft, LayoutDashboard, FileText, Users, Truck, ChevronLeft, Workflow } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/quotations", label: "Quotations", icon: FileText },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/suppliers", label: "Suppliers", icon: Truck },
];

type SidebarContentProps = {
  collapsed?: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
};

function SidebarContent({ collapsed = false, mobile = false, onNavigate }: SidebarContentProps) {

  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">

      <div className={cn( "flex h-16 items-center border-b border-border/60 px-4", collapsed && !mobile ? "justify-center px-2" : "justify-between")} >

        <Link href="/dashboard" onClick={onNavigate}  className={cn("flex items-center gap-3", collapsed && !mobile && "justify-center")}>

          {collapsed && !mobile ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Workflow className="size-5" />
            </div>
          ) : null}

          
          {!collapsed || mobile ? (
            <div className="leading-none">
              <p className="text-md font-semibold tracking-tight">
                Estimation Workspace
              </p>
            </div>
          ) : null}
        </Link>
      </div>

      <div className="flex-1 px-3 py-4">
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "group flex h-11 items-center rounded-xl transition-colors",
                  collapsed && !mobile ? "justify-center px-0" : "gap-3 px-3",
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                title={collapsed && !mobile ? item.label : undefined}
              >
                <Icon className="size-4 shrink-0" />
                {!collapsed || mobile ? <span className="text-sm font-medium"> {item.label} </span> : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <aside
        className={cn(
          "hidden border-r border-border/60 bg-background/80 backdrop-blur xl:flex xl:flex-col",
          collapsed ? "xl:w-22" : "xl:w-70"
        )}
      >
        <div className="flex h-16 items-center justify-end border-b border-border/60 px-3">
          <Button type="button" variant="ghost" size="icon" className="rounded-xl" onClick={() => setCollapsed((prev) => !prev)}>
            <ChevronLeft className={cn("size-4 transition-transform", collapsed && "rotate-180")} />
          </Button>
        </div>

        <SidebarContent collapsed={collapsed} />
      </aside>

      <div className="flex h-16 items-center border-b border-border/60 px-4 xl:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button type="button" variant="ghost" size="icon" className="rounded-xl">
              <PanelLeft className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-75 p-0">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>
                Main navigation for QuoteFlow
              </SheetDescription>
            </SheetHeader>

            <SidebarContent mobile onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}