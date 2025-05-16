import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string;
  photoUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export default function TeamMembers({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  if (!teamMembers || teamMembers.length === 0) return null;
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-center">Team Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {teamMembers
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((member) => (
            <Card
              className="w-full max-w-xs flex flex-col items-center p-4"
              key={member.name}
            >
              <div className="w-30 h-30 mb-3 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl font-bold text-gray-400 dark:text-gray-600">
                    {member.name[0]}
                  </span>
                )}
              </div>
              <div className="font-bold text-lg mb-1">{member.name}</div>
              <div className="flex gap-3 mb-2">
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5 hover:text-blue-600" />
                  </a>
                )}
                {member.githubUrl && (
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5 hover:text-black" />
                  </a>
                )}
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
}
