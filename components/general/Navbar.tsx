"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

//import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export function Navbar() {
  // get the getUser session and the user on the clientside using a client component
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  // get the getUser session and the user on the serverside using async await on a server component
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();

  return (
    <nav className="py-5 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-3xl font-semibold">
          Adu<span className="text-orange-500">Dev</span>
        </h1>
      </Link>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-orange-500 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-orange-500 transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
