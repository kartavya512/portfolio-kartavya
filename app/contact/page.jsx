"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-white min-h-screen max-w-5xl mx-auto px-6">

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-32 pb-24 max-w-2xl">

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900">
          Let's Get in Touch
        </h1>

        {/* Description */}
        <p className="mt-8 text-gray-600 leading-relaxed text-lg">
          I'm always open to discussing new opportunities, interesting
          projects, or collaborations in software development and
          Artificial Intelligence. If you have a question, idea, or
          just want to connect, feel free to reach out.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          The best way to contact me is through email, but you can
          also connect with me on LinkedIn.
        </p>

        {/* Contact Cards */}
        <div className="mt-14 space-y-6">

          {/* Email */}
          <Link href="mailto:kartavyagupta51@gmail.com">
            <div className="flex items-center gap-4 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer">

              <div className="bg-gray-100 p-3 rounded-lg">
                <Mail size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-500">
                  kartavyagupta51@gmail.com
                </p>
              </div>

            </div>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/kartavya-gupta-b50294194/"
            target="_blank"
          >
            <div className="flex items-center gap-4 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer">

              <div className="bg-gray-100 p-3 rounded-lg">
                <Linkedin size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  LinkedIn
                </p>
                <p className="text-gray-500">
                  Connect with me professionally
                </p>
              </div>

            </div>
          </Link>

        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Page;