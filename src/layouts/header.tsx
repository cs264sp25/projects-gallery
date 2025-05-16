import { GitHubLogo } from "@/components/GitHubLogo";
import { ModeToggle } from "@/components/ModeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/40 backdrop-blur px-4">
      <div className="flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-x-2.5">
          <Bot className="hidden md:block h-10 w-auto" />
          <p className="font-bold">PGAi Projects</p>
        </a>
        <div className="flex items-center gap-x-2">
          <a
            href="/contributing"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <GitHubLogo className="h-5 w-5" />
            <span className="hidden md:block">Contribute</span>
          </a>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
