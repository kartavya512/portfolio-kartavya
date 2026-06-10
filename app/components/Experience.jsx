"use client";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Capgemini",
      location: "Bangalore, India",
      duration: "September 2024 – Present",
      type: "Full-time",
      achievements: [
        "Improved front-end applications using JavaScript and SAP UI5, increasing speed and user experience",
        "Worked with Agile teams to convert requirements into clean, reusable, and scalable UI components",
        "Fixed bugs, reviewed code, and completed 50+ user stories to support stable product releases",
        "Built a GenAI assessment solution using LangChain, generating project-specific questions from documentation and AI-evaluating new joiner responses",
      ],
      skills: ["JavaScript", "SAP UI5", "LangChain", "GenAI", "Agile"],
    },
    {
      id: 2,
      role: "Trainee Technical Consultant",
      company: "Fujitsu",
      location: "India",
      duration: "March 2024 – August 2024",
      type: "Full-time",
      achievements: [
        "Assisted in developing and improving SAP UI5 applications by fixing UI bugs and optimizing UI components",
        "Collaborated with senior developers to deliver stable features and ensure consistent UI behavior across modules",
      ],
      skills: ["SAP UI5", "UI Development", "Collaboration"],
    },
    {
      id: 3,
      role: "Web Developer & SEO Analyst",
      company: "Acecoderz",
      location: "India",
      duration: "February 2024 – March 2024",
      type: "Contract",
      achievements: [
        "Developed a school management system using Next.js, React.js, and MySQL with modular UI components",
        "Improved SEO structure and page ranking by optimizing metadata and reducing front-end load times",
      ],
      skills: ["Next.js", "React.js", "MySQL", "SEO"],
    },
    {
      id: 4,
      role: "Software Developer Intern",
      company: "Feather",
      location: "USA (Remote)",
      duration: "July 2023 – January 2024",
      type: "Internship",
      achievements: [
        "Built a Chrome extension to automate CRM workflows by extracting LinkedIn profile data",
        "Integrated the extension with backend APIs to reduce manual data entry and improve productivity",
      ],
      skills: ["Chrome Extension", "JavaScript", "API Integration"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[35px] font-bold text-gray-900 mb-3">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-lg">
            Building scalable solutions across diverse tech stacks
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-3 h-3 bg-gray-900 rounded-full hidden md:block -translate-x-[5px]"></div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        {/* Company Logo / Icon */}
                        {exp.company === "Capgemini" && (
                          <img
                            src="data:image/png;base64,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"
                            alt="Capgemini"
                            className="w-12 h-12 object-contain"
                          />
                        )}

                        {exp.company === "Fujitsu" && (
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Fujitsu-Logo.svg"
                            alt="Fujitsu"
                            className="w-9 h-9 object-contain"
                          />
                        )}

                        {/* Internship Icon */}
                        {exp.type === "Internship" &&
                          exp.company !== "Fujitsu" && (
                            <img
                              src="https://cdn.jsdelivr.net/npm/lucide-static/icons/graduation-cap.svg"
                              alt="Internship"
                              className="w-6 h-6 opacity-70"
                            />
                          )}

                        {/* Work Experience Icon */}
                        {exp.type !== "Internship" &&
                          exp.company !== "Capgemini" &&
                          exp.company !== "Fujitsu" && (
                            <img
                              src="https://cdn.jsdelivr.net/npm/lucide-static/icons/briefcase.svg"
                              alt="Work"
                              className="w-6 h-6 opacity-70"
                            />
                          )}

                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.role}
                        </h3>
                      </div>

                      <span className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed"
                      >
                        <span className="text-gray-400 mt-1.5 text-xs">▪</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-white border border-gray-300 text-gray-700 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
