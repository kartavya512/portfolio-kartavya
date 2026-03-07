"use client";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Lifestyle AI",
      status: "In Development",
      description:
        "A comprehensive health-tracking and wellness assistant powered by AI. Features user authentication, diet and habit tracking, and AI-powered insights for daily lifestyle improvement. Built with modular APIs, background tasks, and optimized database queries for smooth performance.",
      tech: ["FastAPI", "Python", "MongoDB", "AI/ML"],
      highlights: [
        "User Authentication",
        "Diet Tracking",
        "AI Insights",
        "Background Tasks",
      ],
    },
    {
      id: 2,
      title: "Pair Programming Platform",
      status: "Live",
      description:
        "Real-time collaborative coding platform with AI-powered autocomplete and live code synchronization. Enables seamless pair programming with WebSocket-based real-time updates and Monaco Editor integration.",
      tech: ["React", "FastAPI", "WebSockets", "Monaco Editor"],
      highlights: ["Real-time Collaboration", "AI Autocomplete", "Code Sync"],
      link: "https://github.com/kartavya512/pair-programming-app",
    },
    {
      id: 3,
      title: "DocNow",
      status: "Completed",
      description:
        "Full-featured healthcare platform with complete backend system using Django and PostgreSQL. Includes video consultation capabilities, automated email alerts, and secure doctor-patient workflows with production-ready deployment.",
      tech: ["Django", "REST API", "PostgreSQL", "Bootstrap"],
      highlights: [
        "Video Consultations",
        "Email Automation",
        "Secure Authentication",
      ],
      link: "https://github.com/kartavya512/DocNow",
    },
    {
      id: 4,
      title: "Chrome CRM Extension",
      status: "Completed",
      description:
        "Automated CRM workflow tool that extracts LinkedIn profile data and integrates with backend APIs. Significantly reduced manual data entry and improved productivity for sales teams.",
      tech: ["JavaScript", "Chrome API", "REST API"],
      highlights: ["Data Extraction", "API Integration", "Workflow Automation"],
    },
    {
      id: 5,
      title: "School Management System",
      status: "Completed",
      description:
        "Comprehensive school management platform built with Next.js and React. Features modular UI components, optimized SEO structure, and improved page ranking through metadata optimization and performance enhancements.",
      tech: ["Next.js", "React", "MySQL", "SEO"],
      highlights: [
        "Modular Architecture",
        "SEO Optimization",
        "Performance Tuning",
      ],
    },
    {
      id: 6,
      title: "Frontend Mentor Challenges",
      status: "Ongoing",
      description:
        "Collection of UI challenges focused on responsive design, accessibility, and clean component development. Demonstrates proficiency in modern frontend development practices and design implementation.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      highlights: ["Responsive Design", "Accessibility", "Clean Code"],
      link: "https://www.frontendmentor.io/profile/kartavya512",
    },
  ];

  const statusStyles = {
    "In Development": "bg-blue-100 text-blue-700 border-blue-200",
    Live: "bg-green-100 text-green-700 border-green-200",
    Completed: "bg-gray-100 text-gray-700 border-gray-200",
    Ongoing: "bg-purple-100 text-purple-700 border-purple-200",
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className=" text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Full-stack applications and tools I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">
                  Key Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-900 text-white text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
