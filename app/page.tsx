"use client";

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import HomeTop from "@/components/HomeTop";
import AnimatedPortfolioNav from "@/components/Navbar";
import Projects from "@/components/RecentProjects";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className=" w-full">
        <AnimatedPortfolioNav />
        <Hero />
        <HomeTop />
        <Grid />
        <Experience />
        <Projects />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}
