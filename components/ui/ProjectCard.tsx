import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { Star } from "lucide-react"; // If you have Lucide icons installed
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  branch: string;
  stars: number;
  forks: number;
  updatedAt: string;
  avatarUrl?: string;
}

export function ProjectCard({
  name,
  description,
  language,
  branch,
  stars,
  forks,
  updatedAt,
  avatarUrl,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md p-0 overflow-visible relative">
      <div className="absolute right-0 top-0 h-3/5 w-3/5 rounded-tl-full bg-blue-100 pointer-events-none" style={{ zIndex: 0 }} />
      <CardHeader className="relative z-10 flex flex-row items-center gap-2 pb-0 pt-6">
        <Avatar className="h-10 w-10">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={name} />
          ) : (
            <AvatarFallback>{name[0]}</AvatarFallback>
          )}
        </Avatar>
        <div>
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </CardHeader>
      <CardContent className="relative z-10 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-600 text-white">{language}</Badge>
          <span className="text-xs text-muted-foreground">|</span>
          <span className="text-xs text-muted-foreground">{branch}</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground pb-2">
          <div className="flex items-center gap-1">
            <svg width="16" height="16" fill="currentColor" className="text-yellow-500">
              <Star size={16} />
            </svg>
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" fill="currentColor" className="text-muted-foreground">
              <path d="M5 3a3 3 0 0 1 6 0v2h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V3zm2 2V3a1 1 0 1 1 2 0v2H7z"></path>
            </svg>
            <span>{forks}</span>
          </div>
          <div className="ml-auto">
            <span>Last updated {updatedAt}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}