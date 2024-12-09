import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import AnimatedPortfolioNav from "@/components/Navbar";
import Projects from "@/components/RecentProjects";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-white dark:bg-black-100">
      <div className="max-w-7xl w-full">
        <AnimatedPortfolioNav />
        <Hero />
        <Experience />
        <Projects />
        <ScrollToTop />
      </div>
    </main>
  );
}
