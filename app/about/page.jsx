"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Certificates from "../components/Certificates";

const page = () => {
  return (
    <div className="bg-white min-h-screen max-w-5xl mx-auto px-6">
      <Navbar />

      {/* ABOUT SECTION */}
      <div className="lg:pt-36 pt-24 lg:px-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 leading-snug">
          Hi, I'm Kartavya a developer who loves building digital experiences
          with code, creativity and curiosity.
        </h1>

        <p className="pt-8 text-gray-600 leading-relaxed">
          I'm a software developer passionate about building modern web
          applications and exploring the future of technology through Artificial
          Intelligence and Machine Learning.
        </p>

        <p className="pt-6 text-gray-600 leading-relaxed">
          My work focuses on creating scalable web applications, crafting clean
          user interfaces, and solving real-world problems using technology. I
          enjoy working across the stack and continuously learning new tools in
          AI, backend development and cloud technologies.
        </p>

        <p className="pt-6 text-gray-600 leading-relaxed">
          Outside of coding, I express creativity through photography and visual
          storytelling. Capturing landscapes, nature and everyday moments helps
          me see design, patterns and perspective something that also influences
          how I approach building digital products.
        </p>

        <p className="pt-6 text-gray-600 leading-relaxed">
          My goal is to grow as an AI-driven engineer who blends software
          engineering, machine learning and creative thinking to build impactful
          products.
        </p>

        {/* SOCIAL LINKS */}
        <div className="pt-12 space-y-4 max-w-sm">
          <Link href="https://github.com/kartavya512" target="_blank">
            <div className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
              <Github size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">
                Follow on GitHub
              </span>
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/kartavya-gupta-b50294194/"
            target="_blank"
          >
            <div className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
              <Linkedin size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">
                Connect on LinkedIn
              </span>
            </div>
          </Link>

          <Link
            href="https://www.instagram.com/mera___safarnama"
            target="_blank"
          >
            <div className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
              <Instagram size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">
                Photography & Travel
              </span>
            </div>
          </Link>

          <Link href="mailto:kartavyagupta51@gmail.com">
            <div className="flex items-center gap-4 p-3 rounded-lg border border-gray-200  hover:bg-gray-50 transition">
              <Mail size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">
                kartavyagupta51@gmail.com
              </span>
            </div>
          </Link>
        </div>
        {/* CERTIFICATES */}
       
      </div>
       <div className="mt-20 max-w-6xl mx-auto">
          <Certificates />
        </div>

      <Footer />
    </div>
  );
};

export default page;
