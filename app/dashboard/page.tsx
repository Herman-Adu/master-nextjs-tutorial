//import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
//import { redirect } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardRoute() {
  /* const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  } */

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>

        <Link href="/dashboard/create" className={buttonVariants()}>
          Create Post
        </Link>
      </div>
    </div>
  );
}
