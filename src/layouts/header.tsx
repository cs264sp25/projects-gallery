import { ModeToggle } from "@/components/ModeToggle";
import { Bot } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/40 backdrop-blur px-4">
      <div className="flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-x-2.5">
          <Bot className="hidden md:block h-10 w-auto" />
          <p className="font-bold">PGAi Projects</p>
        </a>
        <ModeToggle />
      </div>
    </header>
  );
}
