import * as React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import type { ProjectEntry } from "@/content/config";
import { Badge } from "./ui/badge";
import { ArrowRightIcon } from "lucide-react";

type Project = ProjectEntry["data"];

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Card
      className="overflow-hidden group transition-shadow hover:shadow-lg cursor-pointer border-primary"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* {project.imageUrl && (
        <div className="aspect-video w-full bg-muted overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )} */}
      <CardContent className="flex flex-col gap-2 py-4">
        <CardTitle className="text-lg font-bold line-clamp-1">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-base">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4 mt-2 relative">
        <Badge variant={"secondary"}>{project.year}</Badge>
        <a
          href="#"
          className={`flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute right-6 ${
            hovered ? "pointer-events-auto" : "pointer-events-none"
          }`}
          tabIndex={-1}
        >
          <span className="hidden sm:block">View Project</span>
          <ArrowRightIcon className="size-4 ml-1" />
        </a>
      </CardFooter>
    </Card>
  );
}
