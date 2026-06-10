"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Capgemini",
    location: "Bangalore, India",
    duration: "September 2024 – Present",
    type: "Full-time",
    logo: "data:image/png;base64,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",
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Fujitsu-Logo.svg",
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
    logo: "https://cdn.jsdelivr.net/npm/lucide-static/icons/briefcase.svg",
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
    logo: "https://cdn.jsdelivr.net/npm/lucide-static/icons/graduation-cap.svg",
    achievements: [
      "Built a Chrome extension to automate CRM workflows by extracting LinkedIn profile data",
      "Integrated the extension with backend APIs to reduce manual data entry and improve productivity",
    ],
    skills: ["Chrome Extension", "JavaScript", "API Integration"],
  },
];

const typeColors = {
  "Full-time": { bg: "#dcfce7", text: "#166534" },
  Contract:    { bg: "#fef9c3", text: "#854d0e" },
  Internship:  { bg: "#ede9fe", text: "#5b21b6" },
};

const CompanyLogo = ({ company, logo }) => {
  const [imgError, setImgError] = React.useState(false);
  const initials = company.slice(0, 2).toUpperCase();

  return (
    <div style={{
      width: 52,
      height: 52,
      borderRadius: 12,
      background: "#f8fafc",
      border: "1px solid #e8edf2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      overflow: "hidden",
      padding: imgError ? 0 : 8,
    }}>
      {logo && !imgError ? (
        <img
          src={logo}
          alt={company}
          onError={() => setImgError(true)}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : (
        <span style={{ fontWeight: 800, fontSize: 13, color: "#64748b", letterSpacing: 1 }}>
          {initials}
        </span>
      )}
    </div>
  );
};

const ExperienceCard = ({ exp, index }) => {
  const badge = typeColors[exp.type] || { bg: "#f1f5f9", text: "#334155" };

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e8edf2",
        borderRadius: 16,
        marginBottom: 20,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        animation: "fadeSlideUp 0.5s ease both",
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Header */}
      <div style={{ padding: "20px 24px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <CompanyLogo company={exp.company} logo={exp.logo} />
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.3 }}>
                {exp.role}
              </h3>
              <span style={{
                fontSize: 11,
                fontWeight: 600,
                padding: "2px 10px",
                borderRadius: 99,
                background: badge.bg,
                color: badge.text,
                letterSpacing: 0.3,
              }}>
                {exp.type}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 10px", marginTop: 5 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#334155" }}>{exp.company}</span>
              <span style={{ fontSize: 13, color: "#cbd5e1" }}>·</span>
              <span style={{ fontSize: 13, color: "#64748b" }}>{exp.location}</span>
              <span style={{ fontSize: 13, color: "#cbd5e1" }}>·</span>
              <span style={{ fontSize: 13, color: "#64748b" }}>{exp.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #f1f5f9", margin: "0 24px" }} />

      {/* Body */}
      <div style={{ padding: "16px 24px 20px" }}>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {exp.achievements.map((a, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ marginTop: 7, width: 5, height: 5, borderRadius: "50%", background: "#94a3b8", flexShrink: 0 }} />
              <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>{a}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
          {exp.skills.map((s, i) => (
            <span key={i} style={{
              fontSize: 12,
              padding: "4px 12px",
              borderRadius: 6,
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              color: "#334155",
              fontWeight: 500,
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }, []);
  return (
    <section style={{ padding: "80px 24px", background: "#f8fafc", minHeight: "100vh" }}>
        <Navbar/>

      <div style={{ maxWidth: 760, margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
        {/* Section header */}
        <div style={{ marginBottom: 48, animation: "fadeSlideUp 0.5s ease both" }}>
          
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "#0f172a", margin: "0 0 12px", lineHeight: 1.15 }}>
            Professional Experience
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", margin: 0, maxWidth: 460 }}>
            Building scalable solutions across diverse tech stacks from GenAI to Chrome extensions.
          </p>
        </div>

        {/* Cards */}
        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Experience;