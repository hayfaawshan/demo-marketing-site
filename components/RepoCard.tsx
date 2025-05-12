import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

// Add your own icon components or use placeholders
function BranchIcon() {
  return <span className="inline-block w-4 h-4 bg-gray-200 rounded-full mr-1 align-middle" />;
}
function StarIcon() {
  return <span className="inline-block w-4 h-4 text-yellow-500 mr-1 align-middle">★</span>;
}
function ForkIcon() {
  return <span className="inline-block w-4 h-4 text-gray-400 mr-1 align-middle">⎇</span>;
}
function ClockIcon() {
  return <span className="inline-block w-4 h-4 text-gray-400 align-middle">🕒</span>;
}

export interface RepoCardProps {
  name: string;
  description: string;
  language: string;
  branchCount: number;
  starCount: number;
  forkCount: number;
  lastUpdated: string;
}

export function RepoCard({
  name = "cosine-monorepo",
  description = "All of Cosine's internal packages and apps",
  language = "TypeScript",
  branchCount = 1,
  starCount = 3,
  forkCount = 0,
  lastUpdated = "Last updated 2 days ago",
}: Partial<RepoCardProps>) {
  return (
    <Card className="relative overflow-hidden shadow-lg w-full max-w-md">
      {/* Wavy line at top */}
      <svg
        className="absolute top-0 left-0 w-full h-8 text-blue-100"
        viewBox="0 0 400 40"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 Q100,0 200,40 T400,40 V0 H0 Z"
          fill="currentColor"
        />
      </svg>
      <CardHeader className="pb-2 pt-6">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 pt-2">
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">
            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2" />
            {language}
          </Badge>
        </div>
        <div className="flex items-center space-x-6 text-gray-500 text-sm mt-2">
          <span className="flex items-center">
            <BranchIcon /> {branchCount} <span className="ml-1">dev</span>
          </span>
          <span className="flex items-center">
            <StarIcon /> {starCount}
          </span>
          <span className="flex items-center">
            <ForkIcon /> {forkCount}
          </span>
        </div>
        <div className="absolute bottom-2 right-3 flex items-center text-xs text-gray-400 bg-white/80 px-2 py-1 rounded-full shadow">
          <ClockIcon />
          <span className="ml-1">{lastUpdated}</span>
        </div>
      </CardContent>
    </Card>
  );
}