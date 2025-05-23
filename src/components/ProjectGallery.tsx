import * as React from "react";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectEntry } from "@/content/config";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  projects: ProjectEntry[];
};

function getUniqueYears(projects: ProjectEntry[]) {
  return Array.from(new Set(projects.map((p) => p.data.year)));
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [filter, setFilter] = React.useState<string>("All");
  const [search, setSearch] = React.useState("");

  const years = getUniqueYears(projects);

  const filteredProjects = projects.filter((project) => {
    const matchesYear = filter === "All" || project.data.year === filter;
    const matchesSearch =
      project.data.title.toLowerCase().includes(search.toLowerCase()) ||
      project.data.description.toLowerCase().includes(search.toLowerCase());
    return matchesYear && matchesSearch;
  });

  return (
    <div id="gallery" className="max-w-6xl mx-auto px-4 py-10">
      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={filter === "All" ? "default" : "outline"}
            onClick={() => setFilter("All")}
            className={cn({
              "border-primary": filter !== "All",
            })}
          >
            All
          </Button>
          {years.map((year) => (
            <Button
              key={year}
              variant={filter === year ? "default" : "outline"}
              className={cn({
                "border-primary": filter !== year,
              })}
              onClick={() => setFilter(year)}
            >
              {year}
            </Button>
          ))}
        </div>
        <Input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={cn("border-primary px-4 py-2 w-full sm:w-64", ``)}
        />
      </div>
      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} projectEntry={project} />
        ))}
      </div>
    </div>
  );
}
