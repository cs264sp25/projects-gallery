import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      className={cn(
        "w-full py-20 md:py-32",
        "bg-gradient-to-br from-primary to-primary/80",
        "text-primary-foreground",
        "relative overflow-hidden isolate",
        "dark:from-primary-foreground/5 dark:to-primary-foreground/80",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem]",
          "dark:bg-[linear-gradient(to_right,rgb(248, 244, 244)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255, 255, 255)_1px,transparent_1px)]",
        )}
      ></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-foreground/15 dark:bg-black/30 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute -bottom-24 -right-24 w-64 h-64 bg-foreground/15 dark:bg-black/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground dark:text-white">
            Student Projects Showcase
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 dark:text-white/80 md:text-xl">
            Explore projects built by students in the Practical Generative AI
            course at Johns Hopkins University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#gallery">
              <Button
                size={"lg"}
                effect="expandIcon"
                icon={ArrowDown}
                iconPlacement="right"
                className="dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                Browse Projects
              </Button>
            </a>
            <a href="/about">
              <Button
                size={"lg"}
                effect="ringHover"
                variant="ghost"
                className="dark:text-white dark:hover:bg-white/10"
              >
                About the Course
              </Button>
            </a>
          </div>
          <p className="text-sm text-primary-foreground/80 dark:text-white/70 mt-4">
            All projects are open source.
          </p>
        </div>
      </div>
    </section>
  );
}
