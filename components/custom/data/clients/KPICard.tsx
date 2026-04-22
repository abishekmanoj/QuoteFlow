import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type KPICardProps = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
};

export function KPICard({ title, value, change, icon: Icon }: KPICardProps) {
  return (
    <Card className="rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary/80" />
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-semibold">
            {value}
        </div>
        <p className={`mt-1 text-xs ${ change.startsWith("+") ? "text-green-500" : change.startsWith("-") ? "text-red-500" : "text-muted-foreground"}`}>
            {change}
        </p>
      </CardContent>
    </Card>
  );
}