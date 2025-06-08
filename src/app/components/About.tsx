export default function About() {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "JavaScript", level: 95 },
    { name: "CSS/SCSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git", level: 80 }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express", 
    "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Tailwind CSS", 
    "SCSS", "Git", "Docker", "Vercel", "Netlify"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m currently studying at Noroff, where I&apos;m developing my skills in full-stack development 
                and modern web technologies. My journey in tech started with a curiosity about how things work 
                and evolved into a passion for building digital solutions.
              </p>
              <p>
                Through my studies, I&apos;ve gained hands-on experience with various technologies and frameworks, 
                always focusing on writing clean, maintainable code and creating exceptional user experiences. 
                I enjoy tackling complex problems and turning ideas into reality.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with fellow developers. I believe in continuous learning and 
                staying updated with the latest industry trends.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-accent h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="bg-muted px-4 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}