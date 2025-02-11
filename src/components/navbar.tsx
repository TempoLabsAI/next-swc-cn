"use client";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navbar() {
  const { isSignedIn } = useAuth();


  return (
    <nav className="border-b dark:border-zinc-900 w-full">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Tempo
            </h1>
          </Link>
          <div className="hidden md:flex items-center space-x-4 pl-4">
            <Link href="/#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link>
            <Link href="/#testimonials" className="text-sm text-muted-foreground hover:text-primary">Testimonials</Link>
            <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link>
          </div>
        </div>
        <div className={"flex justify-center items-center" + (isSignedIn && " gap-2")}>
          <ThemeSwitch />
          {isSignedIn ? <UserButton /> : <div className="space-x-4">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>}
        </div>
      </div>
    </nav >
  );
}
