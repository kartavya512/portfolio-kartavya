"use client";

const Certificates = () => {
  const certificates = [
    {
      id: 4,
      title: "PBS ACE Award – GenAI / Industry Impact",
      organization: "Capgemini",
      year: "2025",
      image: "/AceCerti.png",
      description:
        "Awarded the PBS ACE Award (H2 2025) for valuable contributions to Generative AI initiatives and industry impact, recognizing innovation and excellence in delivering AI-driven solutions.",
    },
    {
      id: 3,
      title: "Rising Star Award",
      organization: "Capgemini",
      year: "2025",
      image:
        "/rising_star.png",
      description:
        "Recognized for strong technical contribution, ownership, and consistent performance in project delivery.",
    },
    {
      id: 1,
      title: "30 Days of Google Cloud Program (GCP)",
      organization: "Google Developers",
      year: "2023",
      image:
        "/Participation Certificate_page-0001.jpg",
      description:
        "Completed hands-on training covering cloud fundamentals, compute services, storage, networking, and deployment on Google Cloud Platform.",
    },
    {
      id: 2,
      title: "Programming for Everybody (Python)",
      organization: "Coursera (University of Michigan)",
      year: "2023",
      image:
        "/python_certi_page-0001.jpg",
      description:
        "Learned Python fundamentals including variables, loops, conditionals, functions, and basic data structures.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <h2 className="text-4xl md:text-4xl text-center font-bold mb-14">
          Certificates & Awards
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-gray-200  rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* Certificate Image */}
              <div className="w-full bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full max-h-[320px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {cert.organization} • {cert.year}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;