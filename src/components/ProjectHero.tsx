import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaFilePowerpoint, FaGithub } from "react-icons/fa";

interface ProjectHeroProps {
  title: string;
  year?: string;
  description: string;
  githubUrl?: string;
  slidesUrl?: string;
}

export default function ProjectHero({
  title,
  year,
  description,
  githubUrl,
  slidesUrl,
}: ProjectHeroProps) {
  return (
    <section className="flex flex-col items-center text-center gap-4">
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                className: "text-lg px-8 py-6",
              }),
            )}
          >
            <FaGithub className="inline-block mr-2" /> View Source Code
          </a>
        )}
        {slidesUrl && (
          <a
            href={slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                className: "text-lg px-8 py-6",
              }),
            )}
          >
            <FaFilePowerpoint className="inline-block mr-2" /> View Slides
          </a>
        )}
      </div>
    </section>
  );
}
