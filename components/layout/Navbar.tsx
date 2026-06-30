import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          InterviewAI
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">Features</Link>
          <Link href="/">How It Works</Link>
          <Link href="/">Pricing</Link>
        </nav>

        <div className="flex gap-3">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}