import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export function Navbar() {
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

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-6">
          <Button>Sign in</Button>
          <Button variant="secondary">Sign up</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
