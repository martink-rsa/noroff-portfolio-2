import Image from 'next/image';
import Link from 'next/link';
import ShareButton from '../../components/ShareButton';
import { notFound } from 'next/navigation';

interface ProjectData {
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  imageCaption: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  reflections: string[];
  improvements: string[];
}

const projects: Record<string, ProjectData> = {
  holidaze: {
    slug: 'holidaze',
    title: 'Holidaze - Accommodation Booking Platform',
    description:
      'A modern accommodation booking platform featuring venue search, detailed listings, and booking management.',
    detailedDescription:
      'Holidaze is a comprehensive accommodation booking platform that allows users to discover unique accommodations around the world. The platform features an intuitive search interface, detailed venue listings with high-quality images, and a streamlined booking process. Built with modern React patterns and responsive design principles, it provides an excellent user experience across all devices.',
    imageUrl: '/holidaze.jpg',
    imageCaption:
      'Holidaze homepage featuring hero section with search functionality and featured venues',
    liveUrl: 'https://noroffprojectexam2.netlify.app/',
    githubUrl: 'https://github.com/martink-rsa/noroff-project-exam-2',
    technologies: ['React', 'JavaScript', 'API', 'Responsive Design', 'UI/UX'],
    reflections: [
      'This project taught me the importance of user-centered design in creating booking platforms. The search functionality needed to be intuitive and fast.',
      'Working with accommodation data APIs helped me understand how to handle complex data structures and present them in a user-friendly way.',
      'The responsive design challenges taught me how to create layouts that work seamlessly across different screen sizes, especially for image-heavy content.',
    ],
    improvements: [
      'Implement real-time availability checking to prevent booking conflicts',
      'Add user reviews and rating system for venues',
      'Integrate payment processing for complete booking flow',
      'Add advanced filtering options (price range, amenities, location radius)',
      'Implement user profile and booking history features',
    ],
  },
  auctionhouse: {
    slug: 'auctionhouse',
    title: 'AuctionHouse - Online Bidding Platform',
    description:
      'A comprehensive auction platform with secure bidding, user authentication, and real-time updates.',
    detailedDescription:
      'AuctionHouse is a full-featured online auction platform that enables users to bid on unique items in a secure environment. The platform includes user authentication, real-time bidding updates, seller dashboard, and comprehensive auction management. Built with modern web technologies, it emphasizes security, user experience, and reliable transaction processing.',
    imageUrl: '/auctionhouse.jpg',
    imageCaption:
      'AuctionHouse homepage showcasing the welcome message, key features, and user registration',
    liveUrl: 'https://noroff-semester-project-2.vercel.app/',
    githubUrl: 'https://github.com/martink-rsa/noroff-semester-project-2',
    technologies: [
      'JavaScript',
      'API',
      'Authentication',
      'Real-time',
      'Security',
    ],
    reflections: [
      'Building an auction platform required deep understanding of real-time data updates and user state management.',
      'Security was paramount - implementing proper authentication and bid validation taught me about web application security best practices.',
      'The user experience needed to be trustworthy and transparent, which influenced every design decision from color choices to information hierarchy.',
    ],
    improvements: [
      'Implement WebSocket connections for real-time bid updates',
      'Add automated auction ending with winner notifications',
      'Create seller analytics dashboard with bidding insights',
      'Implement escrow system for secure payments',
      'Add auction categories and advanced search functionality',
    ],
  },
  luxur: {
    slug: 'luxur',
    title: 'Luxur - Premium E-commerce Platform',
    description:
      'An elegant e-commerce platform showcasing luxury products with sophisticated design and smooth user interactions.',
    detailedDescription:
      'Luxur is a premium e-commerce platform designed for luxury product retail. The platform emphasizes sophisticated visual design, smooth user interactions, and premium brand positioning. Built with modern frontend technologies, it showcases advanced UI/UX principles while maintaining excellent performance and accessibility standards.',
    imageUrl: '/luxur.jpg',
    imageCaption:
      'Luxur homepage featuring the exclusive collection showcase with elegant dark theme design',
    liveUrl: 'https://noroff-jsfw-assignment.vercel.app/',
    githubUrl: 'https://github.com/martink-rsa/noroff-jsfw-assignment',
    technologies: [
      'React',
      'TypeScript',
      'E-commerce',
      'Premium Design',
      'Frontend',
    ],
    reflections: [
      'Creating a luxury brand experience taught me how design choices directly impact user perception and brand value.',
      'The dark theme implementation required careful consideration of contrast, readability, and visual hierarchy.',
      'Working with high-quality product imagery taught me about image optimization and loading strategies for premium content.',
    ],
    improvements: [
      'Implement shopping cart and checkout functionality',
      'Add product filtering and sorting capabilities',
      'Create customer account and order tracking features',
      'Implement wishlist and product comparison tools',
      'Add product reviews and recommendations system',
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        <header className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <ShareButton />
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.detailedDescription}
          </p>
        </header>

        <div className="mb-12">
          <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-muted-foreground italic text-center">
            {project.imageCaption}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Project Links</h2>
            <div className="space-y-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <div>
                  <div className="font-medium">Live Site</div>
                  <div className="text-sm text-muted-foreground">
                    View the deployed project
                  </div>
                </div>
              </a>

              <a
                href={`${project.githubUrl}#readme`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div>
                  <div className="font-medium">GitHub README</div>
                  <div className="text-sm text-muted-foreground">
                    View source code and documentation
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold mb-6">Reflections</h2>
            <div className="space-y-4">
              {project.reflections.map((reflection, index) => (
                <div key={index} className="p-6 bg-muted/50 rounded-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    {reflection}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Future Improvements</h2>
            <div className="grid gap-3">
              {project.improvements.map((improvement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                >
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <p className="text-muted-foreground">{improvement}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
