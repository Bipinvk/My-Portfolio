"use client";

import React from "react";
import {
  BookOpenIcon,
  CodeIcon,
  TargetIcon,
  GlobeIcon,
  RocketIcon,
  ClockIcon,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { AnimatedBeamMultipleOutputDemo } from "./ui/animated-beam-multiple-outputs";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Tech Stack Logos (you can replace these with actual icons or logos)
const techStacks = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

// Timeline of Professional Achievements
const professionalTimeline = [
  { year: 2020, achievement: "Started professional journey" },
  { year: 2021, achievement: "First Major Project Delivery" },
  { year: 2022, achievement: "Led Cross-functional Team" },
  { year: 2023, achievement: "Recognized as Top Performer" },
];

const Grid = () => {
  return (
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
        name="Professional Journey"
        description="Adaptable developer with global perspective"
        href="#"
        cta="View Timeline"
        className="col-span-3 lg:col-span-2"
        background={
          <Marquee pauseOnHover className="absolute top-10 [--duration:20s]">
            {professionalTimeline.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
                  "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                  "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
              >
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span className="font-semibold">{item.year}</span>
                </div>
                <p className="mt-2 text-xs">{item.achievement}</p>
              </div>
            ))}
          </Marquee>
        }
      />

      {/* Tech Stack Showcase */}
      <BentoCard
        Icon={CodeIcon}
        name="Tech Arsenal"
        description="Diverse technology stack with cutting-edge tools"
        href="#"
        cta="Explore Skills"
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
  );
};

export default Grid;
