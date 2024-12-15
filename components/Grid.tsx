"use client";

import React from "react";
import {
  BookOpenIcon,
  CodeIcon,
  TargetIcon,
  GlobeIcon,
  RocketIcon,
  DatabaseIcon,
  CloudIcon,
  BarChartIcon,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { AnimatedBeamMultipleOutputDemo } from "./ui/animated-beam-multiple-outputs";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Tech Stack Logos (you can replace these with actual icons or logos)
const techStacks = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "React Query",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "AWS S3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  {
    name: "Responsive Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Code Splitting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  },
  {
    name: "AWS Cognito",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

// Timeline of Professional Achievements

const projects = [
  {
    year: "Nov 2024 - Present",
    name: "EC TPA Finder AI",
    icon: CloudIcon,
    description:
      "AI-driven insurance data extraction system using React.js and TypeScript",
  },
  {
    year: "Aug 2024 - Nov 2024",
    name: "SECQAI",
    icon: DatabaseIcon,
    description:
      "Automated AI security questionnaire response tool with intuitive dashboards",
  },
  {
    year: "Mar 2024 - Aug 2024",
    name: "Genesis SaaS Platform",
    icon: GlobeIcon,
    description:
      "Developed comprehensive SaaS platform with AI-powered tools and subscription models",
  },
  {
    year: "Dec 2023 - Feb 2024",
    name: "AH Connect",
    icon: BarChartIcon,
    description:
      "In-house time tracking and team collaboration application with real-time features",
  },
  {
    year: "Sept 2023 - Nov 2023",
    name: "Resource Management App",
    icon: CodeIcon,
    description:
      "Enhanced resource allocation tool with integrated project management capabilities",
  },
];

const Grid = () => {
  return (
    <div id="experience">
      <BentoGrid>
        {/* How I Work Section */}
        <BentoCard
          Icon={BookOpenIcon}
          name="Work Philosophy"
          description="Goal-oriented developer passionate about solving complex problems"
          href="#"
          cta="Learn More"
          className="col-span-3 lg:col-span-1"
          background={
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <TargetIcon className="h-32 w-32 text-gray-300" />
            </div>
          }
        />

        {/* Global Flexibility Timeline */}
        <BentoCard
          Icon={GlobeIcon}
          name="Professional Journey at Augusta"
          description="Contirbuted in various projects."
          href="#"
          cta=""
          className="col-span-3 lg:col-span-2"
          background={
            <Marquee pauseOnHover className="absolute top-10 [--duration:20s]">
              {projects.map((project, idx) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={idx}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 m-2",
                      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-blue-500" />
                      <span className="font-bold text-sm">{project.year}</span>
                    </div>
                    <h3 className="mt-2 font-semibold text-base">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                );
              })}
            </Marquee>
          }
        />

        {/* Tech Stack Showcase */}
        <BentoCard
          Icon={CodeIcon}
          name="Tech Arsenal"
          description="Diverse technology stack with cutting-edge tools"
          href="#"
          cta=""
          className="col-span-3 lg:col-span-1"
          background={
            <Marquee pauseOnHover className="absolute top-10 [--duration:15s]">
              {techStacks.map((tech, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                  )}
                >
                  <div className="flex flex-col items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={10}
                      height={10}
                      className="h-12 w-12 mb-2"
                    />
                    <span className="text-xs font-medium">{tech.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          }
        />

        {/* Goal-Oriented Developer */}
        <BentoCard
          Icon={RocketIcon}
          name="Goal-Driven Development"
          description="Transforming ideas into impactful solutions"
          href="#"
          cta="My Approach"
          className="col-span-3 lg:col-span-2"
          background={
            <AnimatedBeamMultipleOutputDemo
              className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out 
            [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
            />
          }
        />
      </BentoGrid>
    </div>
  );
};

export default Grid;
