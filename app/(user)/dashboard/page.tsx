import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/auth");
  }

  return (
    <div className="p-6 space-y-4">
      <div>Welcome {data.user.user_metadata.name}</div>
      <div>DASHBOARD PROTECTED PAGE</div>
    </div>
  );
}