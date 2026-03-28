import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import ResumeCard from "./components/ResumeCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div
        style={{
          borderTop: "1px solid var(--border)",
          background:
            "linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 50%, var(--bg) 100%)",
        }}
      >
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ResumeCard />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
