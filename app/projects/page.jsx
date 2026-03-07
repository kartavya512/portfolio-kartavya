import React from "react";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* NAVBAR */}
      <div className="max-w-6xl mx-auto px-6">
        <Navbar />
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 pt-40 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Things I’ve made trying to put my dent in the universe.
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Over the years, I’ve worked on projects focused on building
            scalable web applications and intelligent digital solutions.
            My work blends <span className="font-medium text-gray-800">full-stack development</span>,
            modern UI design, and <span className="font-medium text-gray-800">Artificial Intelligence</span>
            to solve real-world problems.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            I enjoy experimenting with AI-powered features, automation,
            and data-driven applications that enhance user experience
            and system efficiency. Many of my projects are open-source,
            allowing others to explore the architecture, learn from the
            implementation, and contribute improvements.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            I believe in continuous learning, collaboration, and building
            technology that creates real impact.
          </p>
        </div>
      </section>

      {/* PROJECTS FULL WIDTH */}
      <section className="max-w-7xl mx-auto px-6">
        <Projects />
      </section>

      {/* FOOTER */}
      <div className="max-w-6xl mx-auto px-6">
        <Footer />
      </div>

    </div>
  );
};

export default page;