"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import cybertapri from "../assests/cybertapri.jpeg";
import petrends from "../assests/Pettrends.jpeg";
import MusicPortfolio from "../assests/MusicPortfolio.jpeg";
import smritiperfumes from "../../public/smriti.png";

const projects = [
  {
    title: "Smriti Perfumes",
    image: smritiperfumes,
    description:
      "Designed and developed a premium perfume brand website with a focus on elegant UI, product storytelling, and conversion optimization.",
    link: "https://smritiperfumes.com/",
  },
  {
    title: "Cybertapri",
    image: cybertapri,
    description:
      "Built an e-commerce store using Wix. Organized products into categories and implemented SEO strategies to improve search visibility and user experience.",
    link: "https://www.cybertapri.in/",
  },
  {
    title: "PetTrends",
    image: petrends,
    description:
      "Developed a Shopify-based online pet store with a playful and functional design focused on seamless shopping experience.",
    link: "https://pettrends.in/",
  },
  {
    title: "Music Portfolio",
    image: MusicPortfolio,
    description:
      "Created a visually engaging musician portfolio using Framer, designed to showcase music and creative journey in an immersive way.",
    link: "https://justfortest.info/",
  },
];

const Work = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-center font-bold text-4xl mb-16 text-gray-900">
          Freelance Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              className="block"
            >
              <div
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer
                ${
                  hoverIndex === index
                    ? "bg-gray-50 shadow-xl"
                    : "bg-white shadow-md"
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-64 md:h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-3 transition-colors duration-300
                    ${
                      hoverIndex === index
                        ? "text-black"
                        : "text-gray-700"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-5 text-sm font-medium text-gray-600 group-hover:text-green-600">
                    View Project →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;