import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="py-8 px-6 text-center border-t border-border">
        <p className="text-muted-foreground">
          © 2025 Martin K. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
