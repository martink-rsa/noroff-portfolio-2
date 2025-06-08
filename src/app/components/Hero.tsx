export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
            Martin K
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications. 
            Currently studying at Noroff, specializing in modern frontend frameworks 
            and full-stack development.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#projects" 
            className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="border border-border px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 mx-auto text-muted-foreground" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
}