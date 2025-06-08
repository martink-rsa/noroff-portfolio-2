import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Holidaze - Accommodation Booking",
    description: "A modern accommodation booking platform featuring venue search, detailed listings, and booking management. Built with React and modern UI/UX principles for an intuitive user experience.",
    imageUrl: "/holidaze.png",
    githubUrl: "https://github.com/martink-rsa/noroff-project-exam-2",
    liveUrl: "https://noroffprojectexam2.netlify.app/",
    technologies: ["React", "JavaScript", "API", "Responsive Design", "UI/UX"],
    slug: "holidaze"
  },
  {
    title: "AuctionHouse - Online Bidding Platform",
    description: "A comprehensive auction platform with secure bidding, user authentication, and real-time updates. Features quality item curation, buyer protection, and streamlined transaction processes.",
    imageUrl: "/auctionhouse.png",
    githubUrl: "https://github.com/martink-rsa/noroff-semester-project-2",
    liveUrl: "https://noroff-semester-project-2.vercel.app/",
    technologies: ["JavaScript", "API", "Authentication", "Real-time", "Security"],
    slug: "auctionhouse"
  },
  {
    title: "Luxur - Premium E-commerce",
    description: "An elegant e-commerce platform showcasing luxury products with sophisticated design and smooth user interactions. Demonstrates advanced frontend development and premium user experience design.",
    imageUrl: "/luxur.png",
    githubUrl: "https://github.com/martink-rsa/noroff-jsfw-assignment",
    liveUrl: "https://noroff-jsfw-assignment.vercel.app/",
    technologies: ["React", "TypeScript", "E-commerce", "Premium Design", "Frontend"],
    slug: "luxur"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my key projects from my studies at Noroff, 
            showcasing my journey in full-stack development and modern web technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              technologies={project.technologies}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}